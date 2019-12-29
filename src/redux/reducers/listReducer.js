import { fetchListAction } from "../actions/fetchListAction";
import { actions } from "../constants/actions";

const initialState = {
    list: null
}

export function listReducer(state = initialState, action) {
    switch (action.type) {
        case actions.FETCH_LIST:
            
            return {
                ...state,
                list: action.payload
            };
    
        default:
            return state;
    }
}