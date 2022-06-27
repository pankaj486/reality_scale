import { ActionType } from '../action-types';

interface dataType{
    id: string;
    flag: string;
    name: string;
    image: string;
}

export interface Screen {
    type: ActionType.SCREEN_IMAGE;
    payload: Array<dataType>

}

export type Action =
   |Screen