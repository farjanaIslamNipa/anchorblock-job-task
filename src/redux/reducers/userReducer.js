import {LOAD_USERS} from "../actionTypes/actionTypes";

const initialState = {
  users: [],
  user: {},
  loading: true,
}

const userReducer = (state = initialState, action) => {
  switch(action.type){
    case LOAD_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false
      }
    default:
      return state;
  }
}

export default userReducer;