import { ActionType } from '../action-types';
import { mediaType }  from '../../type/MediaControllerType';

export interface PlayPauseType {
    type: ActionType.PLAY_PAUSE_STATUS;
    payload: boolean
}

export interface NextActionType {
    type: ActionType.NEXT_ITEM;
    payload: string | null;
}

export interface PreviousActionType {
    type: ActionType.PREVIOUS_ITEM;
    payload: string | null;
}

export interface DefaultCameraActionType {
    type: ActionType.DEFAULT_CAMERA_INDEX;
    payload: number | null;
}

export type Action =
    | PlayPauseType
    | NextActionType
    | PreviousActionType
    | DefaultCameraActionType