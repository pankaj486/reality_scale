import { ActionType } from "../action-types";

export const INITIAL_STATE = {
    viewAngle : []
}

export default (state: any = INITIAL_STATE, action: any): any => {
    switch (action.type) {
        case ActionType.COMPASS:
            return { ...state, viewAngle: action.payload }
        default:
            return state;
    }
};