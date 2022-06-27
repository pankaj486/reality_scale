import { ActionType } from '../state/action-types';
import { store as reduxStore } from '../state';
import { Webrtc } from "./webrtc";

Webrtc.connect(
    "http://103.56.39.170:3003", //Signaling server address, empty string means same server 
    "34567", //Instance ID
    () => { console.log("Connected!"); }, //Connected event
    (data: string) => { handleResponse(data) }//Received data from server event  console.log("Received: " + data); 
);



const handleResponse = (info: any) => {
    const serverData = JSON.parse(info)
    // console.log("=+++++++++++++++++++++=");
    // console.log(serverData);
    // console.log("=+++++++++++++++++++++=");
    if ("EtoW_Input" in serverData && serverData["EtoW_Input"] === "Compass") {
        reduxStore.dispatch({
            type: ActionType.COMPASS,
            payload: serverData['Compass_Input']['ViewAngle']
        })
    } else if (serverData['EtoW_Input'] === 'Camera') {
        setDefaultCamera(serverData["Camera_Input"]);
    }
}

function setDefaultCamera(cameraInput: { CameraIndex: number }) {
  const { CameraIndex } = cameraInput;
  reduxStore.dispatch({
    type: ActionType.DEFAULT_CAMERA_INDEX,
    payload: CameraIndex ? null : CameraIndex,
  });
}
export const buildingTypeSelect = (name: string, room: string) => {

    const buildingTypeData = {
        "C_Type": "WtoU",
        "WtoU_Input": "BuildingTypeSelect",
        "BuildingTypeSelect_Input":
        {
            "Name": name,
            "Room": room
        }
    }
    if (buildingTypeData.BuildingTypeSelect_Input.Name != " " && buildingTypeData.BuildingTypeSelect_Input.Room != " ") {
        // console.log(buildingTypeData)
    }
    Webrtc.sendJSON(buildingTypeData);
}


export const roomTypeSelect = (roomtype: string, roomName: any) => {

    const roomTypeData = {
        "C_Type": "WtoE",
        "WtoE_Input": "RoomType",
        "RoomType_Input":
        {
            "Room": roomName,
            "RoomType": roomtype
        }
    }
    if (roomTypeData.RoomType_Input.Room != " ") {
        console.log(roomTypeData)
    }

    Webrtc.sendJSON(roomTypeData);
}



export const selectCurrentRoom = (currentRoomName: string, camera: number, roomType: string) => {
    const roomTypeData = {
        "C_Type": "WtoE",
        "WtoE_Input": "Room",
        "Room_Input":
        {
            "Room": currentRoomName,
            "CameraIndex": camera,
            "RoomType": roomType
        }
    }
    if (roomTypeData.Room_Input.Room != " ") {
        console.log("roomTypeData",roomTypeData)
    }

    Webrtc.sendJSON(roomTypeData);
}

