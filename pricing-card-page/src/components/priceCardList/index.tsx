import React from "react";
import PriceCardComponent from "../priceCardComponent";
import { PriceDetails } from "../../data";
import './priceCard.scss';

const PriceCardList = () => {
  return (
    <div className="priceCardList">
      {PriceDetails.map((priceData, index) => <PriceCardComponent key={priceData.id} details={priceData} />)}
    </div>
  )
}

export default PriceCardList;