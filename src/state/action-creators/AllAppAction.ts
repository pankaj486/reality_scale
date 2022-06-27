import React from "react";
import { Dispatch } from "redux";
import { ActionType } from '../action-types';
import { Action } from "../actions/allapp";

//import type
import { AllAppObjType } from "../../type/AllAppType";

export const AllAction = (data:AllAppObjType) => {

    return async (dispatch: Dispatch<Action>) => {
        try{
            dispatch({
                type: ActionType.ALL_APP,
                payload: data
            })
        }catch(e){
           console.log(e);
        }
    }
}
