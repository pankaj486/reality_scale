import { ActionType } from "../action-types";
import { Action } from "../actions/screen";
import { ScreenType } from '../../type/ScreenType';

const screeninitialData = [
    {
        id: '',
        flag:'',
        name: '',
        image:''
    }
]

export const INITIAL_STATE: ScreenType = {
    screen: screeninitialData,
}

export default (state: ScreenType = INITIAL_STATE, action: Action): ScreenType => {

    switch (action.type) {
        //LOADING EVENTS START HERE
        case ActionType.SCREEN_IMAGE:
            return { ...state, screen: action.payload }
        default:
            return state;
    }
};