import axios from "axios"
import {loadUsers} from "../actions/actions"

export const loadUsersData = () => {
  return async (dispatch) => {
    // await axios.get(`${process.env.REACT_APP_API}`)
    await axios.get('https://reqres.in/api/users?page=2')
    .then(res => {
      dispatch(loadUsers(res.data))
    })
  }
}