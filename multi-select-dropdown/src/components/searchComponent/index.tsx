import React, { useState, useRef, useEffect, useCallback } from "react";
import Suggestion from "../suggestion";
import Search from "../search";
import { SearchData } from "../../utils";
import { debounce } from "../debounce";


const SearchComponent = () => {
  const [selectedValue, setSelectedValue] = useState<string[]>([]);
  const [searchValue, setSearchValue] = useState('');
  const [searchList, setSearchList] = useState(SearchData);

  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => inputRef?.current?.focus(), [selectedValue]);

  const handleSearchList = (val: string) => {
    if (selectedValue.includes(val)) return
    setSelectedValue([...selectedValue, val])
    setSearchValue('');
    setSearchList(SearchData);
  };

  const filterSearchList = (searchVal: string) => {
    const result = searchList.filter(val => val.toLowerCase().indexOf(searchVal.toLowerCase()) > -1)
    setSearchList(result);
  }

  const handleDebounceSearch = debounce(filterSearchList, 1000);

  const removeElement = (e: any) => {
    if (e.keyCode !== 8) return
    let newSelectedValue = [...selectedValue];
    newSelectedValue.pop();
    setSelectedValue(newSelectedValue);
  }

  const removeSearchVal = (value: string) => {
    const newSelectedValue = selectedValue.filter(val => val !== value)
    setSelectedValue(newSelectedValue)
  }

  const autoScrollToEnd = () => {
    if (inputRef && inputRef.current) {
      inputRef.current.scrollLeft = inputRef.current?.scrollWidth;
    }
  }
  return <div className="searchComponent">
    <Search value={selectedValue} handleSearch={handleDebounceSearch} ref={inputRef} setSearchValue={setSearchValue} searchValue={searchValue} removeElement={removeElement} removeSearchVal={removeSearchVal} autoScrollToEnd={autoScrollToEnd} />
    <Suggestion handleSelectedValue={handleSearchList} searchData={searchList} />
  </div>
}

export default SearchComponent;