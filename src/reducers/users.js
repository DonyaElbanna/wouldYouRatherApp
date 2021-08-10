import { GET_USERS } from '../actions/users'

export default function users (state = {}, action) {
    switch(action.type) {
        case GET_USERS:
            return {
                ...state, //our slice of the state
                ...action.users  //all users we gettign from the action
            }
        default:
            return state
    }
}