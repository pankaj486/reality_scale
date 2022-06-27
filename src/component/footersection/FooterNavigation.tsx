import React, { useState, useCallback, useEffect } from "react";
import ReactDOM from "react-dom";

import { ScrollMenu, VisibilityContext ,getItemsPos ,slidingWindow} from "react-horizontal-scrolling-menu";
import { LeftArrow, RightArrow } from "./Arrow"
import { Li } from "./Li"

import { roomSelectedWithCamera, selectedCamera } from "../../services/footernavbarServices"

import arrowLeft from "../../assets/image/arrow-left.png";
import arrowRight from "../../assets/image/arrow-right.png";

import { useTypedSelector } from "../../hooks/use-typed-selector";
import { useActions } from "../../hooks/use-actions";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import useDrag from "./useDrag";
import { constants } from "perf_hooks";
import SimpleSlider from "./Slider";

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

const elemPrefix = "test";
const getId = (index: number) => `${elemPrefix}${index}`;
const getItems = () =>
  Array(20)
    .fill(0)
    .map((_, ind) => ({ id: getId(ind) }));

export const FooterNavigation = ({RoomType}:any) => {
    
console.log('RoomType',RoomType)

  const { HandleRoomAction, setCameraIndex } = useActions();

  const { dragStart, dragStop, dragMove, dragging } = useDrag();


  //Get all roomList 
  const { RoomTypes, DefaultRoom } = useTypedSelector(({ navbar }) => navbar.buildingnavData.BuildingType);
  const { selectRoom } = useTypedSelector(({ footernavbar }) => footernavbar);

  const [activeRoom, setRoomActive] = useState(DefaultRoom);
  const [cameras, setCamera] = useState<Array<{ CameraIndex: number }>>();
  // const [activeCamera, setCameraActive] = useState<number>();
  const activeCamera = useTypedSelector(({media}) => media.cameraIndex)
  const [selected, setSelected] = React.useState<string>("");
  const [value,setValue] = useState<Array<any>>(RoomType)
  console.log('active camera', activeCamera)


  
useEffect(()=>{
  setValue(RoomType)
},[RoomType])
  

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
      setCameraIndex(1)
      roomSelectedWithCamera(roomValue, 1);
    }
    HandleRoomAction(roomValue);
  }, [])

  const handleCamera = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const selectedCam = event.currentTarget.getAttribute('data-cam');
    if (selectedCam) {
      setCameraIndex(parseInt(selectedCam))
      selectedCamera(selectedCam.toString())
    }
  }


  const newItemsLimit = 24;
  const pushNewItems = () => {
    if (value.length > newItemsLimit) {
      return false;
    }
    const newItems = value.concat(
      Array(5)
        .fill(0)
        .map((_, ind) => ({ id: getId(value.length + ind) }))
    );
    setValue(newItems);
  };

  
  

  const handleItemClick = (itemId: string ,index:number) => ({
    getItemById,
    scrollToItem
  }: scrollVisibilityApiType) => {
    if (dragging) {
      return false;
    }

    if(RoomTypes.length === index+1){
      const newArrray:Array<any> =[...value]
       newArrray.shift();
        newArrray.push(value[0])
         setValue(newArrray)
    }
    if(index === 0){
      const newArrray:Array<any> =[...value]
      const storeValue = newArrray[newArrray.length - 1];
      newArrray.pop();
        newArrray.unshift(storeValue)
         setValue(newArrray)
    }
  

    setSelected(selected !== itemId ? itemId : "");
    // NOTE: for center items
    scrollToItem(getItemById(itemId), "smooth", "center", "nearest");
  };


  return (
    <div className="col-md-8">
      <div className="middle-class" id="pagination">
        {cameras?.length ? (
          <div className="middle-sec-numbering">
            <button className="middle-class-numbering-left"><img src={arrowLeft} /></button>
            <button className="middle-class-numbering-right"><img src={arrowRight} /></button>
            <ul className="slider-numbering">
              {cameras?.map((camera, index) =>
                <li key={index} data-cam={camera.CameraIndex} onClick={handleCamera} className={activeCamera === camera.CameraIndex ? 'item-numbering active_numbering' : 'item-numbering'}>{camera.CameraIndex}</li>
              )}
            </ul>
          </div>
        ) : ('')}
        <div className="slider-child-outer">
          <SimpleSlider  handleItemClick={handleItemClick}/>
        </div>
      </div>
    </div>
  );
}


function onWheel(
  { getItemById, items, visibleItems, scrollToItem }: scrollVisibilityApiType,
  ev: React.WheelEvent
): void {
  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isThouchpad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY < 0) {
    // NOTE: for center items
    const nextGroupItems = slidingWindow(
      items.toItemsKeys(),
      visibleItems
    ).next();
    const { center } = getItemsPos(nextGroupItems);
    scrollToItem(getItemById(center), "smooth", "center");
  } else if (ev.deltaY > 0) {
    const prevGroupItems = slidingWindow(
      items.toItemsKeys(),
      visibleItems
    ).prev();
    const { center } = getItemsPos(prevGroupItems);
    scrollToItem(getItemById(center), "smooth", "center");
  }
}