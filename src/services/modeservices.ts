import React from "react";

import { Webrtc } from "./webrtc";

export const SwitchingModeRequest = async (mode:string) =>{
    const modeData = {
        "C_Type" : "WtoU",
        "WtoU_Input" :  "Mode",
        "Mode_Input" : 
        {
        "Mode": mode
        }
        }
        
    console.log(modeData)
    Webrtc.sendJSON(modeData);
}