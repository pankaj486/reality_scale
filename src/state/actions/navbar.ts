import { ActionType } from '../action-types';
import { BuildingType, RoomTypeData } from '../../type/NavbarType';

//new JSON
export interface DefaultBuildingData {
    type: ActionType.BUILDING_DATA;
    payload: BuildingType
}

export interface SelectedRoomTYpeData{
    type: ActionType.SELECTED_ROOM_TYPE;
    payload: string|null
}
export interface CompassDataAction{
    type:ActionType.COMPASS_DATA;
    payload:object|undefined
}
export type Action =
    | DefaultBuildingData
    | SelectedRoomTYpeData
    | CompassDataAction

