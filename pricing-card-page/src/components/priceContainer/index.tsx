import React from "react";
import PriceCardList from "../priceCardList";
import ToggleContainer from "../toggleContainer";
import Banner from "../banner";
import './priceContainer.scss';

const PriceContainer = () => {
  return <div className="price-container">
    <Banner planText="Your current plan:" planType="Starer Trial .500MAUs" />
    <p className='choosePlan-text'>Choose a plan</p>
    <ToggleContainer />
    <PriceCardList />
  </div>
}

export default PriceContainer