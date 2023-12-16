import {LOAD_USERS} from "../actionTypes/actionTypes"

export const loadUsers = (data) => {
  return {
    type: LOAD_USERS,
    payload: data
  }
}
