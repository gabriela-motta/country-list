/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../styles/Navbar.css";

const Navbar = ({ handleSearch }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <i className="fas fa-globe-americas fa-lg" />
        <a className="navbar-brand" href="#">
          Country List
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex">
            <div className="form-group has-search">
              <span className="fas fa-search form-control-feedback"></span>
              <input
                type="text"
                className="form-control"
                placeholder="Search by name"
                onChange={(keyword) => handleSearch(keyword)}
              />
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
