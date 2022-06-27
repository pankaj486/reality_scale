import { ActionType } from "../action-types";
import { Action } from "../actions/media";
import { MediaControllerType, mediaType } from '../../type/MediaControllerType';

export const INITIAL_STATE: mediaType = {
    playPauseStatus: false,
    nextItem: null,
    previousItem: null,
    cameraIndex:1
}

export default (state: mediaType = INITIAL_STATE, action: Action): mediaType => {

    switch (action.type) {
        //LOADING EVENTS START HERE
        case ActionType.PLAY_PAUSE_STATUS:
            return { ...state, playPauseStatus: action.payload }
        case ActionType.NEXT_ITEM:
            return { ...state, nextItem: action.payload }
        case ActionType.PREVIOUS_ITEM:
            return { ...state, previousItem: action.payload }
        case ActionType.DEFAULT_CAMERA_INDEX:
            return { ...state, cameraIndex: action.payload }
        default:
            return state;
    }
};