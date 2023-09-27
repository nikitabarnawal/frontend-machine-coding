import React, { useState } from "react";
import Button from "../button";
import './priceCard.scss';
import { PriceList } from "../../type";

interface PriceCardComponentProps {
  details: PriceList
}
const PriceCardComponent = ({ details }: PriceCardComponentProps) => {
  const [selectedValue, setSelectedValue] = useState('2500');

  const handleMaus = (value: string) => setSelectedValue(value);

  const classNames = details.type === 'Pro' ? 'proCard' : details.type === 'Starter' ? 'starterCard' : 'enterPriseCard'
  return (
    <div className={classNames}>
      <p className="type">{details.type}</p>
      <div className="price">
        <span className="price1">{details?.isPrice && details?.type === 'Pro' ? selectedValue : details.isPrice ? details?.price : details?.priceText}</span>
        {details.type === 'Pro' && <span className='monthText'>/month</span>}
      </div>
      {
        <>
          {
            details.type === 'Pro' && <div className='select-maus'>
              <select className='maus' onChange={(e) => handleMaus(e.target.value)}>
                {details?.priceMetaData?.map((data, index) => <option value={data.MAUs}>{data.MAUs} MAUs</option>)}
              </select>

            </div>
          }
          {
            details.type === 'Pro' && <div className='mau-text'>Monthly active users</div>
          }
        </>
      }
      <ul className="featList">
        {
          details?.metaData.map((feat, index) => <li className='feature'>{feat}</li>)
        }
      </ul>
      <Button variant={details.type === 'Pro' ? 'primary' : 'secondary'} context="Choose Plan" />

    </div>
  )
}

export default PriceCardComponent;