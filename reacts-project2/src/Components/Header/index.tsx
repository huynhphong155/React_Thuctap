import React from "react";
import "./index.css";
import user from "../../assets/userColor.svg";

function Header() {
  return (
    <header>
      <div className="container">
        <ul>
          <li>
            <img src={user} alt="" />
            <p>PhongHuynh</p>
          </li>
          <li>
            <p>Log Out</p>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
