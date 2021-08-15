import { GET_USERS } from "../actions/users";
import { ADD_QUESTION, ADD_ANSWER } from "../actions/questions";

export default function users(state = {}, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state, //slice of the state
        ...action.users, //all users we gettign from the action
      };
    case ADD_QUESTION:
      return {
        ...state, //slice of the state
        [action.question.author]: {
          //updating that slice of state
          ...state[action.question.author],
          questions: state[action.question.author].questions.concat([
            action.question.id,
          ]),
        },
      };
    case ADD_ANSWER:
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers: {
            ...state[action.authedUser].answers,
            [action.qid]: action.answer,
          },
        },
      };
    default:
      return state;
  }
}
