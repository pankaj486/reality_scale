import React, { useState, useCallback, useEffect } from "react";
import ReactDOM from "react-dom";

// import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { LeftArrow, RightArrow } from "./Arrow"
import { Li } from "./Li"

import { roomSelectedWithCamera } from "../../services/footernavbarServices"

import arrowLeft from "../../assets/image/arrow-left.png";
import arrowRight from "../../assets/image/arrow-right.png";

import { useTypedSelector } from "../../hooks/use-typed-selector";
import { useActions } from "../../hooks/use-actions";
import Slider from "react-slick";

export const FooterScrool = () => {
 

  const { HandleRoomAction } = useActions();

  //Get all roomList 
  const { RoomTypes, DefaultRoom } = useTypedSelector(({ navbar }) => navbar.buildingnavData.BuildingType);
  const { selectRoom } = useTypedSelector(({ footernavbar }) => footernavbar);

  const [activeRoom, setRoomActive] = useState(DefaultRoom);
  const [cameras, setCamera] = useState<Array<{ CameraIndex: number }>>();
  const [activeCamera, setCameraActive] = useState<number>();

  useEffect(() => {
    setRoomActive(DefaultRoom)
    RoomTypes.forEach((allcameras:any) => {
      if (!selectRoom) {
        if (allcameras.Room.Name === DefaultRoom) {
          setCamera(allcameras.Room.Cameras)
        }
      }
    })
  }, [RoomTypes])

  useEffect(() => {
    RoomTypes.forEach((allcameras:any) => {
      if (selectRoom) {
        if (allcameras.Room.Name === selectRoom) {
          setCamera(allcameras.Room.Cameras)
          // HandleRoomAction('')
        }
      }
    })
  }, [selectRoom])


  const handleroomLIst = useCallback((event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    const roomValue = event.currentTarget.getAttribute('data-value');
    if (roomValue) {
      setRoomActive(roomValue)
      setCameraActive(1)
      roomSelectedWithCamera(roomValue, 1);
    }
    HandleRoomAction(roomValue);
  }, [])

  const handleCamera = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const selectedCam = event.currentTarget.getAttribute('data-cam');
    console.log("selectedCam" , selectedCam)
    if (selectedCam) {
      setCameraActive(parseInt(selectedCam))
      roomSelectedWithCamera(activeRoom, parseInt(selectedCam))
    }
  }

  return (
    <div className="col-md-8">
      <div className="middle-clas" id="paginatio">
        {cameras?.length ? (
          <div className="middle-sec-numberin">
            <button className="middle-class-numbering-lef"><img src={arrowLeft} /></button>
            <button className="middle-class-numbering-righ"><img src={arrowRight} /></button>
            <ul className="slider-numberin">
              {cameras?.map((camera, index) =>
                <li key={index} data-cam={camera.CameraIndex} onClick={(e) => handleCamera(e)} className={activeCamera === camera.CameraIndex ? 'item-numbering active_numbering' : 'item-numbering'}>{camera.CameraIndex}</li>
              )}
            </ul>
          </div>
        ) : ('')}
        <div className="slider-child-oute">
          <ul className="slider-chil" >
            {/* <ScrollMenu
              LeftArrow={LeftArrow}
              RightArrow={RightArrow}
              options={{
                ratio: 0.9,
                rootMargin: "5px",
                threshold: [0.01, 0.05, 0.5, 0.75, 0.95, 1]
              }}
            > */}
            
              {RoomTypes.map((roomtype, index) =>
                <Li
                  setRoom={handleroomLIst}
                  title={roomtype.Room.Name}
                  itemId={index.toString()}
                  key={index}
                  active={activeRoom}
                />
              )
              }
          
            {/* </ScrollMenu> */}
          </ul>
        </div>
      </div>
    </div>
  );
}