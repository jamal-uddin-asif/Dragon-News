import React from "react";
import { NavLink } from "react-router";

const MyLinks = ({children, to, className}) => {
  return <NavLink className={({isActive})=> isActive ? 'font-bold ': className} to={to}>{children}</NavLink>;
};

export default MyLinks;
