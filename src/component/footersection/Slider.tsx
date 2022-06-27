import React, { useEffect, useState } from "react";
import "./style.css";
import { useTypedSelector } from "../../hooks/use-typed-selector";
import { useActions } from "../../hooks/use-actions";
import { isMobile } from "react-device-detect";



import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

export default function SimpleSlider(handleItemClick: any) {
  const { HandleRoomAction } = useActions();

  const { RoomTypes } = useTypedSelector(
    ({ navbar }) => navbar.buildingnavData.BuildingType
  );

  const [selectedRoom, setSelectedRoom] = React.useState<string>("");
  const [currentDevice,setCurrentDevice] = useState(false);

  useEffect(() => {
    setSelectedRoom(RoomTypes[0].Room.Name);
    
  }, [RoomTypes]);
  //
useEffect(()=>{
  setCurrentDevice( isMobile  ? true : false)
},[isMobile])
  console.log("currentDevice",currentDevice)

  const onClickHandler = (room: any) => {
    console.log("Room clicked", room)
    setSelectedRoom(room);
    HandleRoomAction(room);

  };

  const renderSlides = () =>
    RoomTypes.map((rooms, index) => (
      <div key={index} className="sliderbar_menu" >
        <h3
          onClick={(e) => onClickHandler(rooms.Room.Name)}
          className={selectedRoom === rooms.Room.Name ? "active-sliderbar" : ""}
        >
          {rooms.Room.Name}{" "}
        </h3>
      </div>
    ));

  return (
    <div className="App">
      <Slider
        slidesToShow={currentDevice ? 2 :3}
        touchMove={true}
        centerMode={true}
        focusOnSelect={true}
        className="center"
        centerPadding="60px"
      >
        {renderSlides()}
      </Slider>
    </div>
  );
}
