import { saveQuestion, saveQuestionAnswer } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading-bar";

//action types
export const GET_QUESTIONS = "GET_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const ADD_ANSWER = "ADD_ANSWER";

//action creators
export function getQuestions(questions) {
  return {
    type: GET_QUESTIONS,
    questions,
  };
}

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

function addAnswer({ authedUser, qid, answer }) {
  return {
    type: ADD_ANSWER,
    authedUser,
    qid,
    answer,
  };
}

// Async action creators
export function handleAddQuestion(optionOne, optionTwo) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    dispatch(showLoading());

    return saveQuestion({
      author: authedUser,
      optionOneText: optionOne,
      optionTwoText: optionTwo,
    })
      .then((question) => dispatch(addQuestion(question)))
      .then(() => dispatch(hideLoading()));
  };
}

export function handleAddAnswer(info) {
  return (dispatch) => {
    dispatch(addAnswer(info)); //optimitic update

    return saveQuestionAnswer(info).catch((e) => {
      console.warn("Error in handlingAddingAnswer: ", e);
      dispatch(addAnswer(info));
      alert("There was an error submitting your answer, please try again.");
    });
  };
}
