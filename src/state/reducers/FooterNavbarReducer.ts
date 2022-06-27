import { ActionType } from "../action-types";
import { Action } from "../actions/footernavbar";
import { BuildingsData } from "../../services/buildingData";

interface RoomData {
    selectRoom: string | null;
}

export const INITIAL_STATE: RoomData = {
    selectRoom: ''
}

export default (state: RoomData = INITIAL_STATE, action: Action): RoomData => {

    switch (action.type) {
        //LOADING EVENTS START HERE
        case ActionType.ROOM:
            return { ...state, selectRoom: action.payload }
        default:
            return state;
    }
};