import React from "react";
import { Dispatch } from "redux";
import { ActionType } from '../action-types';

import { SwitchingModeRequest } from "../../services/modeservices";

export const ModeRequestAction = (selectedMode: string) => {

    return async (dispatch: Dispatch) => {
        dispatch({
            type: ActionType.MODE,
            payload: selectedMode
        })
       const res =  await SwitchingModeRequest(selectedMode);
    }  
}