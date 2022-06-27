import { ActionType } from '../action-types';

export interface ModeType {
    type: ActionType.MODE;
    payload: string
}

export type Action =
    | ModeType