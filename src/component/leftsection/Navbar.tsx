import React, { useEffect, useState, useRef } from "react";
import arrow_left from "../../assets/image/arrow-left.png";
import arrow_right from "../../assets/image/arrow-right.png";

import { BuildingsData } from "../../services/buildingData";
import {
  buildingTypeSelect,
  roomTypeSelect,
  selectCurrentRoom
} from "../../services/navbarServices";
import { roomSelectedWithCamera } from "../../services/footernavbarServices";
import { RoomListData } from "../../type/NavbarType";

import { useTypedSelector } from "../../hooks/use-typed-selector";
import { useActions } from "../../hooks/use-actions";

export const Navbar = () => {
  const buildingElement = useRef<HTMLDivElement>(null);

  const {
    SelectedRoomTypeAction,
    HadleOnClickBuildingDataAction,
    HandleRoomAction,
  } = useActions();

  const [typeOfRoom, setTypeOfRoom] = useState<RoomListData>();

  //get all roomType
  const { RoomTypes, DefaultRoom, Name } = useTypedSelector(
    ({ navbar }) => navbar.buildingnavData.BuildingType
  );
  const { selectRoom } = useTypedSelector(({ footernavbar }) => footernavbar);
  const [active, setActive] = useState(Name);
  const [buildingTypeState, setBuildingTypeState] = useState<string>("");

  useEffect(() => {
    buildingTypeSelect(Name, DefaultRoom);
    roomSelectedWithCamera(DefaultRoom, 1);
  }, [buildingTypeState]);

  useEffect(() => {
    setActive(Name);
    RoomTypes.forEach((roomtype) => {
      if (!selectRoom) {
        if (roomtype.Room.Name === DefaultRoom) {
          setActiveRoomType(roomtype.Room.DefaultRoomType);
          setTypeOfRoom(roomtype);
          roomTypeSelect(roomtype.Room.DefaultRoomType, selectRoom);
        }
      }
    });
  }, [RoomTypes]);

  useEffect(() => {
    RoomTypes.forEach((roomtype) => {
      if (selectRoom) {
        if (roomtype.Room.Name === selectRoom) {
          console.log(roomtype);
          console.log(selectRoom)
          setActiveRoomType(roomtype.Room.DefaultRoomType);
          setTypeOfRoom(roomtype);
          // HandleRoomAction("");
          selectCurrentRoom(selectRoom, 1, roomtype.Room.DefaultRoomType);
        }
      }
    });
  }, [selectRoom]);

  const [navbarOpen, setNavbarOpen] = useState("");
  const [arrow, setArrow] = useState(arrow_left);
  const [activeRoomType, setActiveRoomType] = useState("");
  const [activeList, setActiveList] = useState(false);

  //newJSONData
  const allBuildingData = BuildingsData();
  //endNewJSONData

  const handleNavbar = (data: React.MouseEvent<Element, MouseEvent>) => {
    setNavbarOpen(data.currentTarget.id);
    setArrow(arrow_right);
    activeList ? setActiveList(false) : setActiveList(true);
  };

  // const activeClass = activeList ? 'active' : '';

  const handleSelectBuilding = (
    selectbuilding: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    
    const buildingType = selectbuilding.currentTarget.getAttribute("data-name");
    const buildingvalue = selectbuilding.currentTarget.getAttribute("data-value");
    //set all building json for redux
    HadleOnClickBuildingDataAction(buildingvalue);
    //request send to backend when change value onclick
    if (buildingType) {
      setBuildingTypeState(buildingType);
    }
  };

  const handleSelectRoom = (
    selectroom: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    const roomType = selectroom.currentTarget.getAttribute("data-name");
    //set all component on selected room type
    if (roomType) {
      console.log(roomType)
      setActiveRoomType(roomType);
      const selectedRoom = selectRoom != "" ? selectRoom : DefaultRoom;
      roomTypeSelect(roomType, selectedRoom);
    }
    SelectedRoomTypeAction(roomType);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto" id="navbarActive">
          <li
            className={`nav-item dropdown activee`}
            id="building"
            onClick={(e) => handleNavbar(e)}
          >
            <div className="dropdown-left">
              <img src={navbarOpen === "building" ? arrow : arrow_left} />
            </div>
            <div
              className="nav-link dropdown-toggle"
              id="navbarDropdown"
              ref={buildingElement}
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Type of Building
            </div>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <ul className="dropdown-item-manu">
                {allBuildingData.BuildingList.map((buildingTypelist, index) => (
                  <li
                    key={index}
                    data-value={index}
                    className={
                      active === buildingTypelist.BuildingType.Name
                        ? "dropdown-item dropdown-active"
                        : "dropdown-item"
                    }
                    data-name={buildingTypelist.BuildingType.Name}
                    onClick={(selectbuilding) =>
                      handleSelectBuilding(selectbuilding)
                    }
                  >
                    {buildingTypelist.BuildingType.Name}
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li
            className="nav-item dropdown activee"
            id="room"
            onClick={(e) => handleNavbar(e)}
          >
            <div className="dropdown-right">
              <img src={navbarOpen === "room" ? arrow : arrow_left} />
            </div>
            {typeOfRoom ? (
              <>
                <div
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Type of Room
                </div>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <ul className="dropdown-item-manu">
                    {typeOfRoom.Room.RoomTypes.map((roomstype, index) => (
                      <li
                        key={index}
                        data-name={roomstype.RoomType.Name}
                        data-value={index}
                        className={
                          activeRoomType === roomstype.RoomType.Name
                            ? "dropdown-item dropdown-active"
                            : "dropdown-item"
                        }
                        onClick={(selectroom) => handleSelectRoom(selectroom)}
                      >
                        {roomstype.RoomType.Name}
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            ) : (
              ""
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};
