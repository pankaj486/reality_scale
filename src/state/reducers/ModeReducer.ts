import { ActionType } from "../action-types";
import { Action } from "../actions/mode";

interface ModeType{
    selectedMode: string;
}

export const INITIAL_STATE: ModeType = {
    selectedMode: 'Automatic',
}

export default (state: ModeType = INITIAL_STATE, action: Action): ModeType => {

    switch (action.type) {
        //LOADING EVENTS START HERE
        case ActionType.MODE:
            return { ...state, selectedMode: action.payload }
        default:
            return state;
    }
};