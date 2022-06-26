import { initialState } from "@/provider/StateProvider";
import { ACTIONS } from "./Actions"; 

const reducers = (state: typeof initialState, action: any) => {
    switch(action.type){
        case ACTIONS.SET_PAGE:
            return {
                ...state,
                page: action.payload
            };
        case ACTIONS.SET_NAV_COMPONENT:
            return {
                ...state,
                NavComponent: action.payload
            };
        case ACTIONS.SET_DATE_RANGE:
            return {
                ...state,
                dateRange: action.payload
            };
        default:
            return state;

    }
}

export default reducers