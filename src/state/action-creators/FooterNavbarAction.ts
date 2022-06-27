import React from "react";
import { Dispatch } from "redux";
import { ActionType } from '../action-types';
import { Action } from "../actions/footernavbar";

export const HandleRoomAction = (room: string | null) => {
    return async (dispatch: Dispatch) => {
        dispatch({
            type: ActionType.ROOM,
            payload: room
        })
    }
}