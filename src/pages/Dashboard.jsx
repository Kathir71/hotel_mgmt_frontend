import { useEffect, useState } from "react";

import { getDetailsApi } from "../api/userApi";
import styles from "../styles/dashboard.module.css";
const Dashboard = () => {
  const [userDetails, setUserDetails] = useState({});
  const [ticketHistory, setHistory] = useState([]);
  useEffect(() => {
    const userId = sessionStorage.getItem("userId");
    getDetailsApi(userId).then((response) => {
      setUserDetails(response.data.userDetails);
      setHistory(response.data.ticketHistory);
    });
  }, []);

  return (
    <>
      <h2 style={{ textAlign: "center" }}>Dashboard</h2>
      <div class="userdetails">
        <h3>User name: {userDetails.name}</h3>
        <h3>User email: {userDetails.email}</h3>
      </div>
      <div class="mcontainer">
        <div class="headings row">
          <div class="inner-row">
            <p>Ticket ID</p>
            <p>Hotel Name</p>
            <p>Number of rooms booked</p>
            <p>Check-in Date</p>
            <p>Check-out Date</p>
          </div>
        </div>
        <div class="datadet">
          {ticketHistory.length != 0 ? (
            ticketHistory.map((ticket) => {
              return (
                <div className={styles.row}>
                  <div className={styles.innerRow}>
                    <p>{ticket.Hotel.name}</p>
                    <p>{ticket.Hotel.address}</p>
                    <p>{ticket.cost}</p>
                    <p>{ticket.checkInDate}</p>
                    <p>{ticket.checkOutDate}</p>
                    <p>{ticket.numRoomsBooked}</p>
                    <p>{ticket.startRoomNum}</p>
                  </div>
                </div>
              );
            })
          ) : (
            <h2>No tickets booked yet</h2>
          )}
        </div>
      </div>
    </>
  );
};
export default Dashboard;
