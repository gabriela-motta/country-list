import React from "react";
import Flag from "./Flag";
import "../styles/CountryList.css";
import Navbar from "./Navbar";

const joinNames = (list) => {
  return list.map((obj) => obj.name).join(", ");
};

const tableColumns = ["Name", "Languages", "Currencies", "Flag"];

const CountryList = ({ countries, handleSearch }) => {
  return (
    <div>
      <Navbar handleSearch={handleSearch} />
      <table className="table table-hover">
        <thead>
          <tr>
            {tableColumns.map((column) => (
              <th scope="col" key={column}>
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {countries.map((country) => (
            <tr key={country.name}>
              <td>{country.name}</td>
              <td>{joinNames(country.languages)}</td>
              <td>{joinNames(country.currencies)}</td>
              <td>
                <Flag country={country} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CountryList;
