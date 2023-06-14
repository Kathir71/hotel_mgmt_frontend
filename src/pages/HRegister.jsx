import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import { registerHotelApi } from "../api/hotelApi";

import styles from "../styles/hreg.module.css";
const RoomInputComponent = (props) => {
  const { setRefs} = props;
  const typeRef = useRef(null);
  const costRef = useRef(null);
  const numberRef = useRef(null);
  const imageRef = useRef(null);
 const fixRefs = (e) => {
    setRefs((prevRefs) => [
      ...prevRefs,
      {
      roomTypeRef: typeRef.current.value,
      roomCostRef: costRef.current.value,
      roomTotalNumberRef: numberRef.current.value,
      roomImageRef: imageRef.current.files[0],
      }]);
  }
 return (
    <>
      <input
        type="text"
        name="roomType"
        id="roomType"
        placeholder="Enter the roomType"
        ref={typeRef}
      />
      <input
        type="number"
        name="roomCost"
        id="roomCost"
        placeholder="Enter cost per day"
        ref={costRef}
      />
      <input
        type="number"
        name="roomNumber"
        id="roomNumber"
        placeholder="Enter the number of rooms of the type"
        ref={numberRef}
      />
      <input type="file" name="roomImage" id="roomImage" ref={imageRef} />
      <button onClick={e => fixRefs(e)}>Freeze</button>
    </>
  );
};

const HRegister = () => {
  const nameRef = useRef(null);
  const addressRef = useRef(null);
  const [refs, setRefs] = useState([]);
  const [roomData, setRoomData] = useState([
    <RoomInputComponent setRefs={setRefs} />,
  ]);

  const handleHotelRegister = async(e) => {
    e.preventDefault();
    const formData = new FormData();
    const HotelInfo = {
      name: nameRef.current.value,
      address: nameRef.current.value,
    };
    let roomInformation = [];
    refs.forEach((ref) => {
      console.log(ref);
      roomInformation.push({
        price: ref.roomCostRef,
        numberAvailable: ref.roomTotalNumberRef,
        roomType: ref.roomTypeRef,
      });
    });
    let roomCollection = [];
    refs.forEach((ref) => {
      roomCollection.push(ref.roomImageRef);
    });
    // refs.forEach((ref, index) => {
    //   formData.append(`roomCollection[${index}]`, ref.roomImageRef);
    // });
    HotelInfo["roomInformation"] = roomInformation;
    formData.append("hotelInfo", JSON.stringify(HotelInfo));
    refs.forEach((ref) => {
      formData.append("roomCollection", ref.roomImageRef);
    })
    console.log(formData);
    // console.log(roomCollection);
    const response = await registerHotelApi(formData);
    console.log(response);
  };

  const handleAddRooms  = (e) => {
    setRoomData((oldVal) => 
      [...oldVal , <RoomInputComponent setRefs={setRefs} 
      />]
    )
 }

  const handlePopRooms = (e) => {
    setRoomData((oldVal) => {
      const temp = [...oldVal];
      temp.pop();
      return temp;
    })
  }

  return (
    <>
      <div className="form_container">
        <h4 className="hm">Register your hotel</h4>
        <div className="flexcn1">
          <div className="col1">
            <input
              type="text"
              name="hname"
              id="hname"
              placeholder="Enter your hotel name"
              autocomplete="off"
              ref={nameRef}
            />
            <input
              type="text"
              name="haddr"
              id="haddr"
              placeholder="Enter your hotel's address"
              autocomplete="off"
              ref={addressRef}
            />
          </div>
        </div>
        <h4>Room Details</h4>
        {roomData.map((roomInput , i) => {
          return(
          <div className="room_input_container" key={i}>{roomInput}</div>
          )
        })}
        <button onClick={(e) => handleHotelRegister(e)}>Register Hotel</button>
        <div className="room_btns">
          <button
            onClick={(e) => handleAddRooms(e)}
            className="btn btn-outline-primary"
          >
            Add more rooms
          </button>
          <button
            onClick={(e) => handlePopRooms(e)}
            className="btn  btn-outline-primary"
          >
            Delete room
          </button>
        </div>
      </div>
      <Link to="/">
        <button className="bth_btn">Back to homepage</button>
      </Link>
    </>
  );
};
export default HRegister;
