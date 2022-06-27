import React from "react";

import { Webrtc } from "./webrtc";

export const fetchHigherScreen = () => {

  const componentMenu = [
    {
      id: '1',
      flag: 'bedroom',
      name: 'BedRoom',
      image: 'https://i.ibb.co/9N4Bf0Z/chastity-cortijo-R-w5-Q-4-Mqm0-unsplash.jpg'
    },
    {
      id: '2',
      flag: 'livingroom',
      name: 'LivingRoom',
      image: 'https://i.ibb.co/KsBG6Rx/sidekix-media-Eo-TUCbv9-Jrs-unsplash.jpg'
    },
    {
      id: '3',
      flag: 'kitchen',
      name: 'Kitchen',
      image: 'https://i.ibb.co/9tk6Hx9/Highres-Screenshot00021.jpg'
    },
    {
      id: '3',
      flag: 'kitchen',
      name: 'Kitchen',
      image: 'https://i.ibb.co/9gvL2FT/Beach.jpg'
    }

  ]

  return componentMenu;

}

export const onmouseDown = (x: number, y: number, buttonType:string) => {
  const mousePointJson = {
    "C_Type": "WtoE",
    "WtoE_Input": "Mouse",
    "Mouse_Input":
    {
      "State": "Pressed",
      "Button" : buttonType,
      "X": x,
      "Y": y
    }
  }
  console.log("onmouseDown", buttonType);
  Webrtc.sendJSON(mousePointJson);
}

export const onmouseMove = (x: number, y: number) => {
  const mouseMovePosition = {
    "C_Type": "WtoE",
    "WtoE_Input": "Mouse",
    "Mouse_Input":
    {
      "State": "Moved",
      "X": x,
      "Y": y
    },
    "Runtime":"true"
  }
  Webrtc.sendJSON(mouseMovePosition);
}

export const mouseRelease = (x:number,y:number,buttonType:string) => {
  const mouseReleaseJson = {
    "C_Type" : "WtoE",
    "WtoE_Input" :  "Mouse",
    "Mouse_Input" :
    {
    "Button" :  buttonType,
    "State" :  "Released",
    "X" :  x,
    "Y" :  y
    },
    "Runtime":"true"
    }
    
  console.log("buttoncheck",mouseReleaseJson)
  Webrtc.sendJSON(mouseReleaseJson);
}