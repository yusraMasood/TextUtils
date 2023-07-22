import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>

          <div
            className={`form-check form-switch text-${
              props.mode == "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.handleMode}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Enable {props.mode} mode
            </label>
          </div>
          <div className="mx-3">
            <button
              className="btn mx-1"
              style={{ backgroundColor: "#007BFF" }}
            ></button>
            <button
              className="btn mx-1"
              style={{ backgroundColor: "#6C757D" }}
            ></button>
            <button
              className="btn mx-1"
              style={{ backgroundColor: "#28A745" }}
            ></button>
            <button
              className="btn mx-1"
              style={{ backgroundColor: "#DC3545" }}
            ></button>
            <button
              className="btn mx-1"
              style={{ backgroundColor: "#FFC107" }}
            ></button>
            <button
              className="btn mx-1"
              style={{ backgroundColor: "#17A2B8" }}
            ></button>
            <button
              className="btn mx-1"
              style={{ backgroundColor: "#F8F9FA" }}
            ></button>
            <button
              className="btn mx-1"
              style={{ backgroundColor: "#343A40" }}
            ></button>
          </div>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}
        </div>
      </div>
    </nav>
  );
}

// Navbar.prototype = { title: PropTypes.string };

export default Navbar;