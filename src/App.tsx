import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import './assets/css/bootstrap.min.css';
import "./assets/css/style.css";
import "./assets/css/Toggle.css";
import "./assets/css/loader.css";
import "./component/footersection/arrow.css";
import { useActions } from "../src/hooks/use-actions";
import { Routes, Route, Link } from "react-router-dom";

import { Home } from '../src/component/Home';
import { MainScreen } from './component/MainScreen';

import { DefaultBuildingData } from './services/buildingData';
import { FooterNavigation } from "./component/footersection/FooterNavigation";
// import {TestingPurpose} from "./component/footersection/FooterNavigation";


const App = () => {

    const { AllScreens, DefaultBuildingAction } = useActions();
    
    useEffect(() => {
        AllScreens();
        const DefaultData = DefaultBuildingData();
        if (DefaultData) {
            DefaultBuildingAction(DefaultData);
        }
    }, []);

    return (
        <div
            className="Estate">
            <MainScreen />
            <Home />
          
        </div>
    );
}
export default App;