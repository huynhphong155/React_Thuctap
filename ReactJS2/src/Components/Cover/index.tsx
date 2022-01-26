//

import React from "react";
import imgLogo from "../../assets/img.svg";
import Circle from "../../assets/Ellipse-big.png";
import logoFooter from "../../assets/logo-footer.svg";
import "./Cover.css";
import { Link } from "react-router-dom";

const Cover = () => {
  return (
    <div className="wrapper-container">
      <div className="inner-container">
        <div className="content">
          <div className="text-container">
            <h1 className="content-text">LMS - Learning</h1>
            <h1 className="content-text">Management System</h1>
            <Link to="/login">
              <button className="button">E - Finance</button>
            </Link>
          </div>
          <div className="footer-container">
            <p className="footer-text">Hệ thống giáo dục được phát triển bởi</p>
            <img className="footer-logo" src={logoFooter} alt="" />
          </div>
        </div>
        <div className="wrapper-img">
          <div className="img-container">
            <img className="img" src={imgLogo} alt="" />
            <img className="img-circle" src={Circle} alt="" />
          </div>
          <p className="description">Designed by UI/UX Team of Alta Media</p>
        </div>
      </div>
    </div>
  );
};

export default Cover;
