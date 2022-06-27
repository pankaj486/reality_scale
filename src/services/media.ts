import React from "react";

import { Webrtc } from "./webrtc";

export const NextPreviousRequest = (request: string) => {
    const ItemRequest = {
        "C_Type": "WtoU",
        "WtoU_Input": "Automatic",
        "Automatic_Input":
        {
            "Input": request
        }
    }
    console.log(ItemRequest)
    Webrtc.sendJSON(ItemRequest);
}