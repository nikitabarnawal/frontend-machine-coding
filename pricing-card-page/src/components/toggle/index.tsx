import React from "react";
import './toggle.scss';

interface ToggleParams {
  isMonthlySelected: Boolean;
  handleToggleChange: () => void;
}

const Toggle = ({ isMonthlySelected, handleToggleChange }: ToggleParams) => {
  return (
    <label className='switch' onChange={handleToggleChange}>
      <input type='checkbox' checked={Boolean(isMonthlySelected)} />
      <span className="slider"></span>
    </label>
  )
}

export default Toggle;