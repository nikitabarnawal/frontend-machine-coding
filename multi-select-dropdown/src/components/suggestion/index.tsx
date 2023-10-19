import React from "react";
import './suggestion.scss';

type SuggestionProp = {
  handleSelectedValue: (val: string) => void;
  searchData: Array<string>;
}

const Suggestion = ({ handleSelectedValue, searchData }: SuggestionProp) => {
  return (
    <div className="suggestion-box">
      {
        searchData.map((val, index) => <div key={index} onClick={() => handleSelectedValue(val)}>{val}</div>)
      }
    </div>
  )
}

export default Suggestion;