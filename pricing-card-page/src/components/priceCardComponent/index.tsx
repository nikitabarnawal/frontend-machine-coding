import React, { useState } from "react";
import Button from "../button";
import './priceCard.scss';
import { PriceList } from "../../type";

interface PriceCardComponentProps {
  details: PriceList;
  initialValue: string;
  isMonthlySelected: boolean;
  handleClick: () => void;
}
const PriceCardComponent = ({ details, isMonthlySelected, initialValue, handleClick }: PriceCardComponentProps) => {
  const [selectedValue, setSelectedValue] = useState(initialValue);

  const { type, isPrice, price, metaData, priceMetaData, isActive, priceText, isSelectUser } = details;

  const handleSelecteMaus = (value: string) => {
    setSelectedValue(value)
  }

  const getPrice = () => {
    if (selectedValue === '2500') return '$99';
    return '$150';
  }

  const classNames = isPrice ? 'priceCard' : 'enterPriseCard';

  const getPriceLabel = () => {
    if (isSelectUser) {
      return getPrice();
    }
    if (isPrice) {
      return price;
    }
    return priceText;
  }

  return (
    <div className={classNames}>
      <p className="type">{type}</p>
      <div className="price">
        <span>{getPriceLabel()}</span>
        {isSelectUser && <span className='month-year-text'>{isMonthlySelected ? '/month' : '/year'}</span>}
      </div>
      {

        isSelectUser && <div className='dropdown-maus'>
          <div className='select-maus'>
            <select className='maus' onChange={(e) => handleSelecteMaus(e.target.value)}>
              {priceMetaData?.map((data, index) => <option className='mau-list' key={index} value={data.MAUs}>{data.MAUs} MAUs</option>)}
            </select>

          </div>
          <div className='mau-text'>{isMonthlySelected ? 'Monthly active users' : 'Yearly active users'}</div>
        </div>

      }
      <ul className="featList">
        {
          metaData?.map((feat, index) => <li className='feature'>{feat}</li>)
        }
      </ul>
      <Button variant={isActive ? 'primary' : 'secondary'} context={!isPrice ? 'Contact Us' : 'Choose Plan'} handleClick={handleClick} />

    </div>
  )
}

export default PriceCardComponent;