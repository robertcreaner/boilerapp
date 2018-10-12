import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <a className="navbar-brand logo" href="#">
      Boilerplate App
    </a>

    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
    >
      <span className="navbar-toggler-icon" />
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <div className="nav-link" href="#">
            <NavLink to="/">Home</NavLink>
          </div>
        </li>
        <li className="nav-item">
          <div className="nav-link" href="#">
            <NavLink activeClassName="currentPage" to="/about">
              About
            </NavLink>
          </div>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
          >
            Dropdown
          </a>
          <div className="dropdown-menu">
            <div className="dropdown-item" href="#">
              <NavLink activeClassName="currentPage" to="/contact">
                Contact
              </NavLink>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navigation;
