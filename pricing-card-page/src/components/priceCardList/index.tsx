import React from "react";
import PriceCardComponent from "../priceCardComponent";
import { PriceDetails } from "../../data";
import './priceCard.scss';

interface PriceCardListProps {
  isMonthlySelected: boolean;
  handleClick: () => void;
}

const PriceCardList = ({ isMonthlySelected, handleClick }: PriceCardListProps) => {

  return (
    <div className="priceCardList">
      {
        PriceDetails.map((priceData, index) =>
          <PriceCardComponent key={priceData.id} details={priceData} isMonthlySelected={isMonthlySelected} initialValue='2500' handleClick={handleClick} />
        )
      }
    </div>
  )
}

export default PriceCardList;