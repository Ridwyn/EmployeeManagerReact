import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="blue darken-3">
          <div className="nav-wrapper">
            <Link to="/" className="brand-logo left">
              Employee Manager
            </Link>
            <ul className="right">
              <li>
                <Link to="/">
                  Employees
                  <i className="fa fa-users fa-2x" />
                </Link>
              </li>
              <li>
                <Link to="/employees/add">
                  Add Employee
                  <i className="fa fa-plus fa-2x" />
                </Link>
              </li>
              <li>
                <Link to="/about">
                  About
                  <i className="fa fa-question-circle fa-2x" />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
