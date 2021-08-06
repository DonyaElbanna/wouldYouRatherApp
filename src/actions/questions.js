export const GET_QUESTIONS = 'GET_QUESTIONS'

//action creator
export function getQuestions (questions) {
    return {
        type: GET_QUESTIONS,
        questions
    }
}