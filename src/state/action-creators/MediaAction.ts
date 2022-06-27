import React from "react";
import { Dispatch } from "redux";
import { ActionType } from '../action-types';
import { Action } from "../actions/media";

export const PlayPauseAction = (playPauseStatus: boolean) => {
    return async (dispatch: Dispatch<Action>) => {
        try {
            dispatch({
                type: ActionType.PLAY_PAUSE_STATUS,
                payload: playPauseStatus
            })
        } catch (e) {
            console.log(e);
        }
    }
}

export const nextAction = (nextItem: string) => {
    return async (dispatch: Dispatch<Action>) => {
        try {
            dispatch({
                type: ActionType.NEXT_ITEM,
                payload: nextItem
            })
        } catch (e) {
            console.log(e);
        }
    }
}

export const previousAction = (previousItem: string) => {
    return async (dispatch: Dispatch<Action>) => {
        try {
            dispatch({
                type: ActionType.PREVIOUS_ITEM,
                payload: previousItem
            })
        } catch (e) {
            console.log(e);
        }
    }
}

export const setCameraIndex = (cameraIndex: number | null) => {
    return {
        type: ActionType.DEFAULT_CAMERA_INDEX,
        payload: cameraIndex
    }
}