import React from "react";
import { Link } from "react-router-dom";
import classes from "./CountryItem.module.css";

interface CountryItemProps {
  code: string;
  name: string;
}

export const CountryItem: React.FC<CountryItemProps> = ({ code, name }) => {
  return (
    <Link to={`${code}`}>
      <div className={classes.item}>{`${name} - ${code}`}</div>
    </Link>
  );
};
