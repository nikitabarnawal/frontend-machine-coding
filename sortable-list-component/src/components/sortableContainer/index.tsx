import React from "react";
import Header from "../header";
import SortableListContainer from "../sortableListContainer";

const SortableContainer = () => {
  return (
    <>
      <Header value='Select Your top 5 tech skills' />
      <SortableListContainer />
    </>
  )
}

export default SortableContainer;