export const GET_USERS = 'GET_USERS' 
export const ADD_QUESTION_AUTHOR = 'ADD_QUESTION_AUTHOR'

//action creator
export function getUsers (users) {
    return {
        type: GET_USERS,
        users
    }
}

export function addQuestionAuthor ({id, author }) {
    return {
        type: ADD_QUESTION_AUTHOR,
        id,
        author
    }
}

