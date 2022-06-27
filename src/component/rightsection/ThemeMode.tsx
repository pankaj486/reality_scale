import React,{useState,useEffect} from "react";
import ReactDOM from "react-dom";
import day from "../../assets/image/DayBlack.png";
import night from "../../assets/image/NightWhite.png";
import day1 from "../../assets/image/DayWhite.png";
import night1 from "../../assets/image/NightBlack.png";


import { Webrtc } from "../../services/webrtc";

export const ThemeMode = () => {
    const [Day,setDay]=useState(day);
    const [Night,setNight]=useState(night)
    const [Day1,setDay1]=useState(day1);
    const [Night1,setNight1]=useState(night1)
    const[isActiveSun,setisActiveSun]=useState(false)
    const[isActiveMoon,setisActiveMoon]=useState(false)
    
    

    const handleSunMoonMode = (value:string) => {
    //    const currentMode = mode.currentTarget.getAttribute('data-mode');
    // value==="Day"?setDay(day1):setNight(night1);

    const themeModeJson={
        "C_Type" : "WtoE",
        "WtoE_Input" :  "State",
        "State_Input" :
        {
        "State" :`${value}`
        }
        }
        Webrtc.sendJSON(themeModeJson);
        setisActiveSun(!isActiveSun);
        setisActiveMoon(!isActiveMoon);

    }

    return (
        <div className="all-mode">
           
            <div data-mode="sun" onClick={(event) => handleSunMoonMode("Day")} className={isActiveSun?"sun-mode1":"sun-mode"}>
                {isActiveSun ? <img src={Day1} /> : <img src={Day} />}
            </div>
            <div data-mode="moon" onClick={(event) => handleSunMoonMode("Night")} className={isActiveMoon?"moon-mode1":"moon-mode"}>
                {isActiveMoon ? <img src={Night1} /> : <img src={Night} />}
            </div>
            
        </div>
    );
}