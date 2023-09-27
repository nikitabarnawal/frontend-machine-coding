import React from "react";
import ErrorBoundary from "../../errorBoundary";
import Toggle from "../toggle";
import './toggleContainer.scss';

const ToggleContainer = () => {
  return (
    <div className="toggleContainer">
      <span className="toggle-text">Billed monthly</span>
      <ErrorBoundary fallback={<span style={{ color: "#fff" }}>Something went wrong</span>}><Toggle /></ErrorBoundary>
      <span className="toggle-text">Billed annually</span>
    </div>
  )
}

export default ToggleContainer;