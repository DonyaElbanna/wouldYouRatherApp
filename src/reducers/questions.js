import { GET_QUESTIONS, ADD_QUESTION, ADD_ANSWER } from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case GET_QUESTIONS:
      return {
        ...state, //return our slice on the state
        ...action.questions, //merging questions with state
      };
    case ADD_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question,
      };
    case ADD_ANSWER:
      return {
        ...state, //slice of the state
        [action.qid]: {
          //updating that slice of state
          ...state[action.qid],
          [action.answer]: {
            ...state[action.qid][action.answer],
            votes: state[action.qid][action.answer].votes.concat([
              action.authedUser,
            ]),
          },
        },
      };
    default:
      return state;
  }
}
