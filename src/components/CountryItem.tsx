import { Link } from "react-router-dom";
import classes from "./CountryItem.module.css";
import React from "react";

export const CountryItem = ({ code, name }) => {
  return (
    <Link to={`${code}`}>
      <div className={classes.item}>{`${name} - ${code}`}</div>
    </Link>
  );
};
