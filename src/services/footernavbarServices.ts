import { Webrtc } from "./webrtc";

export const roomSelectedWithCamera = (room: string, camera: number) => {
    const roomWithcamData = {
        "C_Type": "WtoU",
        "WtoU_Input": "Room",
        "Room_Input": {
            "Name": room,
            "CameraIndex": camera,
        },
    };
    if(roomWithcamData.Room_Input.Name !==" "){
        console.log(roomWithcamData);
    }
    Webrtc.sendJSON(roomWithcamData);
};


export const selectedCamera = (cameraIndex: string) => {
    const currentCameraData = {
        "C_Type" : "WtoE",
        "WtoE_Input" :  "Camera",
        "Camera_Input" : {
            "CameraIndex" : cameraIndex
            }
        }
    console.log("currentCameraData", currentCameraData)
    Webrtc.sendJSON(currentCameraData);
};

