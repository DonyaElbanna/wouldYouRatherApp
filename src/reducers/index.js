import { combineReducers } from 'redux'
import authedUser from './authedUser'
import users from './users'
import questions from './questions'
//import { loadingBarReducer } from 'react-redux-loading'

//combining reducers cuz createStore func can only have one root reducer
export default combineReducers ({
    authedUser,
    users,
    questions,
    //loadingBar: loadingBarReducer,
})