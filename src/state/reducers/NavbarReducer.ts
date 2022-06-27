import { ActionType } from "../action-types";
import { Action } from "../actions/navbar";
import { NavbarType, BuildingType } from '../../type/NavbarType';
import { BuildingsData } from "../../services/buildingData";

const initialData = {
    "BuildingType":
    {
        "Name": " ",
        "RoomTypes": [
            {
                "Room":
                {
                    "Name": " ",
                    "RoomTypes": [
                        {
                            "RoomType":
                            {
                                "Name": " ",
                                "Cameras": 0,
                                "Components": [
                                    {
                                        "Name": " ",
                                        "Image": " ",
                                        "Interaction": " "
                                    },
                                    {
                                        "Name": " ",
                                        "Image": " ",
                                        "Interaction": " "
                                    },
                                    {
                                        "Name": " ",
                                        "Image": " ",
                                        "Interaction": " "
                                    }
                                ]
                            }
                        },
                        {
                            "RoomType":
                            {
                                "Name": " ",
                                "Cameras": 0,
                                "Components": [
                                    {
                                        "Name": " ",
                                        "Image": " ",
                                        "Interaction": " "
                                    },
                                    {
                                        "Name": " ",
                                        "Image": " ",
                                        "Interaction": " "
                                    },
                                    {
                                        "Name": " ",
                                        "Image": " ",
                                        "Interaction": " "
                                    }
                                ]
                            }
                        },
                        {
                            "RoomType":
                            {
                                "Name": " ",
                                "Cameras": 0,
                                "Components": [
                                    {
                                        "Name": " ",
                                        "Image": " ",
                                        "Interaction": " "
                                    },
                                    {
                                        "Name": " ",
                                        "Image": " ",
                                        "Interaction": " "
                                    },
                                    {
                                        "Name": " ",
                                        "Image": " ",
                                        "Interaction": " "
                                    }
                                ]
                            }
                        }
                    ],
                    "DefaultRoomType": " ",
                    "Cameras":[
                        {
                            "CameraIndex":0
                        }
                    ]
                }
            },

        ],
        "DefaultRoom": " "
    }
}


const selectedBuilding = initialData;

export const INITIAL_STATE: NavbarType = {
    buildingnavData: selectedBuilding,
    selectedRoomType: null,
    Data:{}

}

export default (state: NavbarType = INITIAL_STATE, action: Action): NavbarType => {

    switch (action.type) {
        //LOADING EVENTS START HERE
        case ActionType.BUILDING_DATA:
            return { ...state, buildingnavData: action.payload }
        case ActionType.SELECTED_ROOM_TYPE:
            return { ...state, selectedRoomType : action.payload }
        case ActionType.COMPASS_DATA:
            return {...state,Data:action.payload}
        default:
            return state;
    }
};