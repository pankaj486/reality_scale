import React, { useEffect } from "react";
import ReactDOM from "react-dom";

//import components
import { Navbar } from "./leftsection/Navbar";
import { ComponentMenu } from "./leftsection/ComponentMenu";
import { AutoToggle } from "./leftsection/AutoToggle";
import { MediaController } from "./MediaController";
import { ThemeMode } from "./rightsection/ThemeMode";
import { Compass } from "./rightsection/Compass";
import { FooterNavigation } from "./footersection/FooterNavigation";

import { useTypedSelector } from "../hooks/use-typed-selector";
import { useActions } from "../hooks/use-actions";

export const Home = () => {
  const { HadleOnClickBuildingDataAction } = useActions();

  const currentMode = useTypedSelector(({ allapp }) => allapp.AllApp.mode);
  const { RoomTypes, DefaultRoom } = useTypedSelector(
    ({ navbar }) => navbar.buildingnavData.BuildingType
  );

  useEffect(() => {
    HadleOnClickBuildingDataAction("0");
    }, []);

  return (
    <div className="container">
      <div className="row outer-sec">
        <div className="col-md-2">
          <div className="Question-navbar">
            <img src={require("../assets/image/Question.png")} />
          </div>
          <div className="estate-left-sec">
            <Navbar />
            <ComponentMenu />
          </div>
          <AutoToggle />
        </div>
        {currentMode === "Automatic" || !currentMode ? (
          <div className="col-md-8">
            <div className="middle-class">
              <MediaController />
            </div>
          </div>
        ) : (
          <FooterNavigation RoomType={RoomTypes} />
        )}
        <div className="col-md-2">
          <div className="light-dark-mode-right">
            <ThemeMode />
          </div>
          <Compass />
        </div>
        <div className="left-sec-footer1" id="toggle-btn-switch">
          <div className="switch-Auto-Manual">
            <div className="auto-sec-left">
              <p>Auto</p>
            </div>
            <div className="auto-sec-right-img">
              <img src="image/auto.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
