import React from "react";
import cross from '../../icons/cross.svg';
import './search.scss';

type SearchProps = {
  value: Array<string>
  handleSearch: (e: any) => void;
  searchValue: string;
  setSearchValue: (value: string) => void;
  removeElement: (e: any) => void;
  removeSearchVal: (val: string) => void;
  autoScrollToEnd: () => void;
}

const Search = React.forwardRef<HTMLInputElement, SearchProps>(({ value, handleSearch, searchValue, setSearchValue, removeElement, removeSearchVal, autoScrollToEnd }, ref) => {
  return (
    <div className="search-box">
      <div className="search-container">
        <div className="search-result">
          {
            value.map((val, index) => <span key={index} className="selected-value">{val}<img src={cross} alt="deleteIcon" onClick={() => removeSearchVal(val)} /></span>)
          }
          <input type="text" role="searchbox" aria-describedby="select multiple items from the list"
            onChange={(e) => { setSearchValue(e.target.value); handleSearch(e.target.value) }} value={searchValue} ref={ref}
            onKeyDown={(e) => removeElement(e)} onInput={autoScrollToEnd} />
        </div>
      </div>
    </div>
  )
})

export default Search;