import React from "react";
import './header.scss';

interface HeaderProps {
  value: string;
}

const Header = ({ value }: HeaderProps) => {
  return <p>{value}</p>
}

export default Header;