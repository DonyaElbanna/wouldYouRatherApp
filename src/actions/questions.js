import { saveQuestion } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'

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

//Async action creators
export function handleAddQuestion (optionOne, optionTwo) {

}