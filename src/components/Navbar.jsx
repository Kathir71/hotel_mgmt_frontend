import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";
const Navbar = () => {
    const handleLogout = (e) => {

    }
    return (
  <nav>
        <div className="icon">
          <img src="homeimages/logo.png" alt="logo" className={styles.logoimg} />
        </div>
        <div className={styles.btn_container}>
          <ul>
            <li>
                <Link to = "/chooseSignup">
              <button
              >
                Sign up
              </button>
              </Link>
            </li>
            <li>
                <Link to = "/login">
              <button
              >
                Login
              </button>
              </Link>
            </li>
            <div className={styles.user}>
              <i
                style=
               {{
                fontSize:'24px',
                color:'rgb(26,26,113)',
                display:'inline-block'
               }} 
              ></i>
              <li>
              <Link to = "/dashboard">
                <button
                >
                  Dashboard
                </button>
                </Link>
              </li>
              <li>
                <button
                    onClick={ e => handleLogout(e)}
                >
                  Logout
                </button>
              </li>
            </div>
          </ul>
        </div>
      </nav>
    )
}

export default Navbar;