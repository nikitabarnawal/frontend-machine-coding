import React from "react";
import './toggle.scss';

const Toggle = () => {
  return (
    <label className='switch'>
      <input type='checkbox' />
      <span className="slider"></span>
    </label>
  )
}

export default Toggle;