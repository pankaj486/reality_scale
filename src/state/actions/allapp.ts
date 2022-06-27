import { ActionType } from '../action-types';
import { AllAppObjType }  from '../../type/AllAppType';

export interface AllAppObj {
    type: ActionType.ALL_APP;
    payload: AllAppObjType
}

export type Action =
    | AllAppObj