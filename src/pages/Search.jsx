import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { searchHotelApi } from "../api/hotelApi";

import styles from "../styles/search.module.css";

const Search = () => {
  const [hotels, setHotels] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const query = sessionStorage.getItem("query");
    searchHotelApi(
      {query:query}).then((response) => {
      if (response.status === 200) setHotels(response.data);
      console.log(response.data);
    });
  }, []);
  const handleSelect = (props) => {
    const {id , e , name} = props;
    sessionStorage.setItem("hotelId" , id);
    sessionStorage.setItem("hotelName" , name)
    navigate("/hdetails");
  }

  return (
    <>
      <div class="mh">Search results for {sessionStorage.getItem("query")} </div>
      <div class="hcontainer">
        {hotels.map((hotel, i) => {
            return (
              <div className={styles.hcard}>
                <button
                  type="button"
                  class="btn btn-primary"
                  id="selectbtn"
                  data-mdb-ripple-color="dark"
                  onClick = {e => handleSelect({
                    e , 
                    id:hotel.id,
                    name:hotel.name,
                  })}
                >
                  Select
                </button>
                <div className={styles.details}>
                  <h1 className={styles.hname}>{hotel.name}</h1>
                  <i
                    class="fa fa-map-marker"
                    // style="color:rgb(33, 33, 120)"
                  ></i>
                  <p
                    className={styles.haddr}
                    // style="color:rgb(34, 63, 209); display: inline-block;"
                  >
                    {hotel.address}
                  </p>
                </div>
              </div>)
            })
          }
      </div>
    </>
  );
};
export default Search;
