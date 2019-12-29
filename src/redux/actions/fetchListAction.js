import { actions } from "../constants/actions";

export const fetchListAction = (payload) =>  {
   return {
        type: actions.FETCH_LIST,
        payload
    }
}