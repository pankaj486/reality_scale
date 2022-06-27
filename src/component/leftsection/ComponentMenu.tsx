import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import { useTypedSelector } from "../../hooks/use-typed-selector";
import { useActions } from "../../hooks/use-actions";

import arrow_left from "../../assets/image/arrow-left.png"
import arrow_right from "../../assets/image/arrow-right.png"

export const ComponentMenu = () => {

  interface componentType {
    RoomType: {
      Cameras: number;
      Components: Array<{
        Name: string,
        Image: string,
        Interaction: string
      }>;
      Name: string;
    }
  }

  const { SelectedRoomTypeAction } = useActions();

  const [componentItem, setComponentItem] = useState<componentType>();

  const { RoomTypes, DefaultRoom, Name } = useTypedSelector(({ navbar }) => navbar.buildingnavData.BuildingType);
  const selectedRoomType = useTypedSelector(({ navbar }) => navbar.selectedRoomType);
  const { selectRoom } = useTypedSelector(({ footernavbar }) => footernavbar);

  useEffect(() => {
    RoomTypes.forEach((roomtype) => {
      if (!selectRoom) {
        if (DefaultRoom === roomtype.Room.Name) {
          roomtype.Room.RoomTypes.forEach((roomscomponent) => {
            if (roomscomponent.RoomType.Name === roomtype.Room.DefaultRoomType) {
              setComponentItem(roomscomponent)
            }
          })
        }
      }
    })
  }, [RoomTypes])

  useEffect(() => {
    RoomTypes.forEach((roomtype) => {
      if (selectRoom) {
        if (roomtype.Room.Name === selectRoom) {
          roomtype.Room.RoomTypes.forEach((roomscomponent) => {
            if (roomscomponent.RoomType.Name === roomtype.Room.DefaultRoomType) {
              setComponentItem(roomscomponent)
            }
          })
        }
      }
    })
  }, [selectRoom])

  useEffect(() => {
    RoomTypes.forEach((roomtype) => {
      roomtype.Room.RoomTypes.forEach((roomscomponent) => {
        if (roomscomponent.RoomType.Name === selectedRoomType) {
          setComponentItem(roomscomponent)
          SelectedRoomTypeAction(null)
        }
      })
    })
  }, [selectedRoomType])

  const [activeComponent, setActiveComponet] = useState<number>();

  const [componentState, setComponentState] = useState({
    expand: false,
    width: '57px',
    arrow: arrow_left
  })

  const handleClick = () => {
    if (!componentState.expand) {
      setComponentState({
        expand: true,
        width: '210px',
        arrow: arrow_right
      })
    } else {
      setComponentState({
        expand: false,
        width: '57px',
        arrow: arrow_left
      })
    }
  }

  const handleComponent = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const componentVal = event.currentTarget.getAttribute("data-value")
    // const component = event.currentTarget.getAttribute("data-component")
  
    if (componentVal) {
      setActiveComponet(parseInt(componentVal))
    }
  }

  return (
    <div className="left-side-manu" id="components-child">
      <ul style={{ width: `${componentState.width}` }}>
        <li className="left-icon active1" onClick={handleClick}>
          <div className="similer-ic"><img src={componentState.arrow} /></div>
          {componentState.expand ? (<span>Components</span>) : ('')}
        </li>
        {
          componentItem?.RoomType.Components.map((component, index) =>
            !componentState.expand ? (
              <li key={index} className={activeComponent === index ? 'left-icon active-bg active-color-bg' : 'left-icon'} onClick={(e) => handleComponent(e)} data-component={component.Name} data-value={index}>
                <div className="similer-ic"><img src={`/images/${component.Image}.png`} /></div>
              </li>
            ) : (
              <li key={index} className={activeComponent === index ? 'left-icon active-bg' : 'left-icon'} onClick={(e) => handleComponent(e)} data-component={component.Name} data-value={index}>
                <div className="similer-ic"><img src={`/images/${component.Image}.png`} /></div>
                <span>{component.Name}</span>
              </li>
            )
          )
        }
      </ul>
    </div>
  );
}