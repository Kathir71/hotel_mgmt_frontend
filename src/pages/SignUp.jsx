import { useRef, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { signUpApi } from "../api/userApi";
import { AuthContext } from "../contexts/AuthContext";

import styles from "../styles/signup.module.css";
const SignUp = () => {
  const emailRef = useRef(null);
  const passwdRef = useRef(null);
  const nameRef = useRef(null);
  const navigate = useNavigate();
  const { setAuth, setUserId } = useContext(AuthContext);

  const handleSignUp = async (e) => {
    e.preventDefault();
    const response = await signUpApi({
      email: emailRef.current.value,
      name: nameRef.current.value,
      password: passwdRef.current.value,
    });
    if (response.status === 200) {
      sessionStorage.setItem("userId", response.data.id);
      setUserId(response.data.id);
      setAuth(true);
      navigate("/");
    }
  };
  return (
    <>
      <div className={styles.registerWrapper}>
        <div className={styles.registerBlock}>
          <h3 className={styles.registerTitle}>Welcome</h3>
          <p className="sm">Let's sign you up!</p>
          <form onSubmit={(e) => handleSignUp(e)} method="POST">
            <input
              type="text"
              name="uname"
              placeholder="Name"
              autocomplete="off"
              ref={nameRef}
            />
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
              <input type="submit" value="Sign Up" />
            </div>
          </form>
          <Link to="/">
            <button className={styles.button}>
              <span>Back to homepage</span>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default SignUp;
