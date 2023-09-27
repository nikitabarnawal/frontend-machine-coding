import React, { useState } from "react";
import PriceCardList from "../priceCardList";
import ToggleContainer from "../toggleContainer";
import Banner from "../banner";
import './priceContainer.scss';

const PriceContainer = () => {
  const [isMonthlySelected, setIsMonthlySelected] = useState(true);

  const handleClick = () => alert('I am clicked');

  return <div className="price-container">
    <Banner planText="Your current plan:" planType="Starer Trial .500MAUs" />
    <p className='choosePlan-text'>Choose a plan</p>
    <ToggleContainer isMonthlySelected={isMonthlySelected} setIsMonthlySelected={setIsMonthlySelected} />
    <PriceCardList isMonthlySelected={isMonthlySelected} handleClick={handleClick} />
  </div>
}

export default PriceContainer