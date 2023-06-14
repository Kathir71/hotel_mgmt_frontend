import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import styles from "../styles/home.module.css";
import Navbar from "../components/Navbar";
const Home = () => {
  const queryRef = useRef(null);
  const checkInDateRef = useRef(null);
  const checkOutDateRef = useRef(null);
  const navigate = useNavigate();
  const handleSearch = (e) => {
    const query = queryRef.current.value;
    e.preventDefault();
    console.log(query);
    sessionStorage.setItem("query", query);
    sessionStorage.setItem("checkInDate" , checkInDateRef.current.value);
    sessionStorage.setItem("checkOutDate" , checkOutDateRef.current.value);
    navigate("/search");
  };
  return (
    <>
      <Navbar />
      <div
        className={styles.bg_img}
        style={{
          background: 'url("/homeimages/header_background.jpg")',
          width: "100%",
          minHeight: "400px",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className={styles.header_text}>
          <h1>HOTELS RENTALS & MORE</h1>
          <p>Get the best prices on the go</p>
        </div>
      </div>
      <div className={styles.search_form}>
        <form onSubmit={(e) => handleSearch(e)}>
          <div className="input-group rounded">
            <input
              type="search"
              name="search_value"
              placeholder="Search for destination or hotel"
              aria-label="Search"
              aria-describedby="search-addon"
              id="search"
              ref={queryRef}
            />
          </div>
          <div className={styles.date_inputs}>
            <div className={styles.col1}>
              <label for="checkin">Checkin date</label>
              <input type="date" name="checkin" id="" ref = {checkInDateRef}/>
            </div>
            <div className={styles.col1}></div>
            <div className={styles.col2}>
              <label for="checkout">Checkout date</label>
              <input type="date" name="checkout" id="" ref = {checkOutDateRef}/>
            </div>
          </div>
          <input type="submit" value="SEARCH" id="customsearchbtn" />
        </form>
      </div>
      <h3
        style={{
          marginInline: "auto",
          textAlign: "center",
          margin: "2em",
        }}
      >
        POPULAR DESTINATIONS
      </h3>
      <div className={styles.cards_container}>
        <div className={styles.mycard}>
          <img
            src="homeimages/Jaipur.jpg"
            alt="jaipur"
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "50%",
            }}
          />
          <p>Jaipur</p>
        </div>
        <div className={styles.mycard}>
          <img
            src="./homeimages/Hyderabad.jpg"
            alt="Hyderabad"
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "50%",
            }}
          />
          <p>Hyderabad</p>
        </div>
        <div className={styles.mycard}>
          <img
            src="./homeimages/Pondicherry.jpg"
            alt="Pondicherry"
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "50%",
            }}
          />
          <p>Pondicherry</p>
        </div>
        <div className={styles.mycard}>
          <img
            src="./homeimages/Chennai.jpg"
            alt="Chennai"
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "50%",
            }}
          />
          <p>Chennai</p>
        </div>
        <div className={styles.mycard}>
          <img
            src="./homeimages/Mumbai.jpg"
            alt="Mumbai"
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "50%",
            }}
          />
          <p>Mumbai</p>
        </div>
      </div>
    </>
  );
};

export default Home;
