import { saveQuestion } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading-bar'

export const GET_QUESTIONS = 'GET_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'

//action creators
export function getQuestions (questions) {
    return {
        type: GET_QUESTIONS,
        questions
    }
}

function addQuestion (question) {
    return {
        type: ADD_QUESTION,
        question
    }
}

// Async action creators
export function handleAddQuestion (optionOne, optionTwo) {
    return (dispatch, getState) => {
        const { authedUser } = getState();

        dispatch(showLoading());

        return saveQuestion ({
            author: authedUser,
            optionOneText: optionOne,
            optionTwoText: optionTwo,
        })
        .then ((question) => dispatch(addQuestion(question)))
        .then (() => dispatch(hideLoading()));
    }
}
