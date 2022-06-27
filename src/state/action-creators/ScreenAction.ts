import React from "react";
import { Dispatch } from "redux";
import { ActionType } from '../action-types';
import { Action } from "../actions/screen";

import { fetchHigherScreen } from "../../services/mainscreen";

export const AllScreens = () => {

    const allHighScreen = fetchHigherScreen();

    return async (dispatch: Dispatch<Action>) => {
        try {
            dispatch({
                type: ActionType.SCREEN_IMAGE,
                payload: allHighScreen

            })
        } catch (e) {
            console.log(e);
        }
    }

}