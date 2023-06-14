import {useEffect , useState , useRef} from "react";

import { getHotelDetailsApi } from "../api/hotelApi";
import { bookApi } from "../api/bookingApi";
const HDetails = () => {
    const [hotelDetails , setHotelDetails] = useState([]);
    const numberRef = useRef(null);
    const typeRef = useRef(null);
    useEffect(() => {
        const hotelId = parseInt(sessionStorage.getItem("hotelId"));
        getHotelDetailsApi({hotelId:hotelId}).then((response) => {
            console.log(response);
            if(response.status === 200) setHotelDetails(response.data);
        });
    } , []);

    const handleBooking = async(e) => {
        const hotelId = sessionStorage.getItem("hotelId");
        const roomType = typeRef.current.value;
        const numRoomsRequired = numberRef.current.value;
        const response = await bookApi({
            userId:parseInt(sessionStorage.getItem("userId")),
            hotelId:parseInt(hotelId),
            roomType:roomType,
            numRoomsRequired:parseInt(numRoomsRequired),
            checkInDate:sessionStorage.getItem("checkInDate"),
            checkOutDate:sessionStorage.getItem("checkOutDate")
        })
    }
    return (
        <>
    <div class="mcontainer" id = "container">
    <div class="hoteldetails">
    </div>
    <>
    <div class="hname">{sessionStorage.getItem("hotelName")}</div>
    {hotelDetails.map((hotel , i) => {
        return (
            <div>
            <p>Room type:{hotel.roomType}</p>
            <p>Room price:{hotel.price}</p>
            <p>Number of Rooms Available:{hotel.numberAvailable}</p>
            </div>
        )
    })
    }
    <div>
        <h1>Enter what do you want</h1>
        <input type="text" name="roomType" id="roomType" required ref = {typeRef} placeholder="Room type"/>
        <input type="number" name="numRoomsRequired" id="numRoomsRequired" required ref = {numberRef} placeholder="Num rooms Required"/>
        <button onClick={ e => handleBooking(e)}>BOOK</button>
    </div>
    </>
      </div>

        </>
    )

}
export default HDetails;