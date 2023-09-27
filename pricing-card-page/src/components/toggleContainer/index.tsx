import React from "react";
import ErrorBoundary from "../../errorBoundary";
import Toggle from "../toggle";
import './toggleContainer.scss';

interface ToggleContainerProps {
  isMonthlySelected: boolean;
  setIsMonthlySelected: (val: boolean) => void;
}

const ToggleContainer = ({ isMonthlySelected, setIsMonthlySelected }: ToggleContainerProps) => {

  const handleToggleChange = () => {
    setIsMonthlySelected(!isMonthlySelected)
  }

  return (
    <div className="toggleContainer">
      <span className="toggle-text">Billed monthly</span>
      <ErrorBoundary fallback={<span style={{ color: "#fff" }}>Something went wrong</span>}><Toggle isMonthlySelected={isMonthlySelected} handleToggleChange={handleToggleChange} /></ErrorBoundary>
      <span className="toggle-text">Billed annually</span>
    </div>
  )
}

export default ToggleContainer;