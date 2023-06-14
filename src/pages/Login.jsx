import { useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

import { loginApi } from "../api/userApi";
import { AuthContext } from "../contexts/AuthContext";

import styles from "../styles/signup.module.css";

const Login = () => {
  const emailRef = useRef(null);
  const passwdRef = useRef(null);
  const navigate = useNavigate();
  const {setAuth , setUserId} = useContext(AuthContext);
  const handleLogin = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwdRef.current.value;
    const response = await loginApi({
      email: email,
      password: password,
    });
    if (response.status === 200) {
      sessionStorage.setItem("userId" , response.data.id);
      setUserId(response.data.id);
      setAuth(true);
      navigate("/");
    }
  };
  return (
    <div>
      <div className={styles.registerWrapper}>
        <div className={styles.registerBlock}>
          <h3 className={styles.registerTitle}>Welcome</h3>
          <p className="sm">Login and book on the go!</p>
          <form onSubmit={(e) => handleLogin(e)} method="POST">
            <input
              type="email"
              name="email"
              placeholder="Email address"
              required
              autocomplete="off"
              ref={emailRef}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              autocomplete="off"
              ref={passwdRef}
            />
            <div className={styles.btn_container}>
              <input type="submit" value="Login" />
            </div>
          </form>
          <Link to="/">
            <button className={styles.button}>
              <span>Back to homepage</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
