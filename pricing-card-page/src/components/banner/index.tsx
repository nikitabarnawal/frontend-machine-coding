import React from "react";
import './banner.scss';

interface BannerProps {
  planText: string;
  planType: string;
}

const Banner = ({ planText, planType }: BannerProps) => {
  return <div className="banner">
    <p className='banner-text'>{planText}</p>
    <p className="banner-type">{planType}</p>
  </div>
}

export default Banner;