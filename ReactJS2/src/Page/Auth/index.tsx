import React from "react";
import style from "./Auth.module.css";
import frame from "../../assets/frame.svg";
import logoTopLeft from "../../assets/logo-top-left.svg";
import { Route, Routes } from "react-router-dom";
import ForgotPassword from "./ForgotPassword";
import Login from "./Login";

const Auth = () => {
  return (
    <div className={style.container}>
      <img className={style.frame} src={frame} alt="frame" />
      <img className={style.logo_top_left} src={logoTopLeft} alt="" />
      <div className={style.feature}>
        <Routes>
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
};

export default Auth;
