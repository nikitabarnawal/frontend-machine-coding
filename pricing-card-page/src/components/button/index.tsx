import React from "react";
import './button.scss';

interface ButtonProps {
  variant: string;
  context: string;
  handleClick: () => void;
}

const Button = ({ variant, context, handleClick }: ButtonProps) => {
  return <button className={variant} onClick={handleClick}>{context}</button>
}

export default Button;