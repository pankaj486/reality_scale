import React from "react";
import { Dispatch } from "redux";
import { ActionType } from '../action-types';
import { Action } from "../actions/navbar";

import { BuildingsData } from "../../services/buildingData";
import { buildingTypeSelect } from "../../services/navbarServices";
import { roomSelectedWithCamera } from "../../services/footernavbarServices";

import { RoomTypeData, BuildingType } from '../../type/NavbarType';

export const HadleOnClickBuildingDataAction = (buildingvalue: string | null) => {
    return async (dispatch: Dispatch<Action>) => {
        if (buildingvalue) {
            const allBuildingJson = BuildingsData();
            const selectBuilding = allBuildingJson.BuildingList[parseInt(buildingvalue)];
            dispatch({
                type: ActionType.BUILDING_DATA,
                payload: selectBuilding
            })
        }
    }
}

export const DefaultBuildingAction = (DefaultData: BuildingType) => {
    return async (dispatch: Dispatch<Action>) => {
        if (DefaultData.BuildingType.Name && DefaultData.BuildingType.DefaultRoom) {
            //initial(default) request send to backend
            buildingTypeSelect(DefaultData.BuildingType.Name, DefaultData.BuildingType.DefaultRoom)
            roomSelectedWithCamera(DefaultData.BuildingType.DefaultRoom, 1)
        }
        dispatch({
            type: ActionType.BUILDING_DATA,
            payload: DefaultData
        })
    }
}

export const SelectedRoomTypeAction = (roomselected: string | null) => {

    return async (dispatch: Dispatch<Action>) => {
        try {
            dispatch({
                type: ActionType.SELECTED_ROOM_TYPE,
                payload: roomselected
            })
        } catch (e) {
            console.log(e);
        }
    }
}
export const CompassDataAction=(Data:any)=>{
    return{
        type:ActionType.COMPASS_DATA,
        payload:Data
    } 
}