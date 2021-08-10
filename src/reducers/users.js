import { GET_USERS, ADD_QUESTION_AUTHOR } from '../actions/users'

export default function users (state = {}, action) {
    switch(action.type) {
        case GET_USERS:
            return {
                ...state, //our slice of the state
                ...action.users  //all users we gettign from the action
            }
        case ADD_QUESTION_AUTHOR:
            const { id, author } = action

            return {
                ...state,
                [author]: {
                    ...state[author],
                    questions: state[author].questions.concat(id)
                }
            }
        default:
            return state
    }
}