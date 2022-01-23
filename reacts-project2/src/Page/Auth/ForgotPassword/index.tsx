import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import userIcon from "../../../assets/user.svg";
import style from "./ForgotPassword.module.css";

const ForgotPassword = () => {
  const [username, setUsername] = useState("");
  const [authCode, setAuthCode] = useState("");
  const isActive = useMemo(
    () => username !== "" && authCode !== "",
    [username, authCode]
  );

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(username);
    console.log(authCode);
    console.log(isActive);
  };

  return (
    <form>
      <h1 className={style.title}>Cấp lại mật khẩu</h1>
      <div className={style.field}>
        <label className={style.label} htmlFor="">
          Tên đăng nhâp
        </label>
        <div className={style.input_container}>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            name="username"
            id="username"
            className={style.input}
          />
          <img className={style.input_icon} src={userIcon} alt="user-icon" />
        </div>
      </div>
      <div className={style.field}>
        <label className={style.label} htmlFor="">
          Mã xác thực
        </label>
        <div className={style.input_container}>
          <input
            value={authCode}
            onChange={(e) => setAuthCode(e.target.value)}
            type="text"
            name="auth-code"
            id="auth-code"
            className={`${style.input} ${style.input_no_padding}`}
          />
        </div>
      </div>
      <div className={style.link_container}>
        <Link to="/login">Trở về trang chủ</Link>
      </div>

      <div>
        {isActive ? (
          <button className={style.button} onClick={handleSubmit}>
            Cấp lại mật khẩu
          </button>
        ) : (
          <button
            disabled
            className={`${style.button} ${style.button_inactive}`}
            onClick={handleSubmit}
          >
            Cấp lại mật khẩu
          </button>
        )}
      </div>
    </form>
  );
};

export default ForgotPassword;
