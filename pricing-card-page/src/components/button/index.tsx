import React from "react";
import './button.scss';

interface ButtonProps {
  variant: string;
  context: string;
}

const Button = ({ variant, context }: ButtonProps) => {
  return <button className={variant}>{context}</button>
}

export default Button;