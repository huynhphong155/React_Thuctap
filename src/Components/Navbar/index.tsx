import React from "react";
import logo from "../../assets/logo.svg";
import icon1 from "../../assets/icon1.svg";
import icon2 from "../../assets/icon2.svg";
import icon3 from "../../assets/icon3.svg";
import "./index.css";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <nav className="nav-wrapper">
      <div className="nav-logo">
        <NavLink to="/">
          <img src={logo} alt="Logo" />
        </NavLink>
      </div>
      <ul>
        <NavLink style={{ display: "block" }} to="/Payment">
          <li>
            <img src={icon1} alt="icon1" />
          </li>
        </NavLink>
        <NavLink style={{ display: "block" }} to="/Billing">
          <li>
            <img src={icon2} alt="icon2" />
          </li>
        </NavLink>
        <NavLink style={{ display: "block" }} to="/Order">
          <li>
            <img src={icon3} alt="icon3" />
          </li>
        </NavLink>
      </ul>
    </nav>
  );
}

export default Navbar;
