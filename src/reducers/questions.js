import { GET_QUESTIONS } from '../actions/questions'

export default function questions (state = {}, action) {
    switch (action.type) {
        case GET_QUESTIONS:
            return {
                ...state,    //return our slice on the state
                ...action.questions    //merging questions with state
            }
        default:
            return state
    }
}