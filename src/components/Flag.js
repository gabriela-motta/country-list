import React from "react";
import "../styles/Flag.css";

const Flag = ({ country }) => {
  return (
    <img
      src={country.flag}
      className="img-fluid img-thumbnail"
      alt={country.alpha3Code}
    ></img>
  );
};

export default Flag;
