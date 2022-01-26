import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import passwordIcon from "../../../assets/password.svg";
import userIcon from "../../../assets/user.svg";
import { auth } from "../../../Firebase";
import style from "./Login.module.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  onAuthStateChanged(auth, (currentUser: any) => {
    setUser(currentUser);
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, username, password);
      setLoading(false);
      navigate("/Order");
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <form>
      <h1 className={style.title}>Đăng nhập</h1>
      <div className={style.field}>
        <label className={style.label} htmlFor="">
          Tên đăng nhập
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
          Mật khẩu
        </label>
        <div className={style.input_container}>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            id="password"
            className={style.input}
          />
          <img
            className={style.input_icon}
            src={passwordIcon}
            alt="password-icon"
          />
        </div>
      </div>
      <div className={style.link_container}>
        <Link to="/login/forgot-password">Quên mật khẩu?</Link>
      </div>

      <div>
        {loading ? (
          <button
            className={`${style.button} ${style.button_inactive}`}
            onClick={handleSubmit}
          >
            Đang đăng nhập
          </button>
        ) : (
          <button className={style.button} onClick={handleSubmit}>
            Đăng nhập
          </button>
        )}
      </div>
    </form>
  );
};

export default Login;
