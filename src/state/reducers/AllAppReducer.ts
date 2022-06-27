import { ActionType } from "../action-types";
import { Action } from "../actions/allapp";
import { AllAPpInitial,  } from '../../type/AllAppType';

const AllApp = {
    mode:'Automatic',
    loaderBar:false,
}

export const INITIAL_STATE: AllAPpInitial = {
    AllApp,
}

export default (state: AllAPpInitial = INITIAL_STATE, action: Action): AllAPpInitial => {

    switch (action.type) {
        //LOADING EVENTS START HERE
        case ActionType.ALL_APP:
            return { ...state, AllApp: action.payload }
        default:
            return state;
    }

};