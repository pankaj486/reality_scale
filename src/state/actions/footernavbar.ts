import { ActionType } from '../action-types';
//newJSON

export interface Room {
    type: ActionType.ROOM;
    payload: string | null
}

export type Action =
    | Room