import { getInitialData } from '../utils/api'
import { getUsers } from '../actions/users'
import { getQuestions } from '../actions/questions'
import { setAuthedUser } from '../actions/authedUser'
//import { showLoading, hideLoading} from 'react-redux-loading'

const AUTHED_ID = ''
//thunk action creator
export function handleInitialData () {
    return (dispatch) => {
        // dispatch(showLoading())
        return getInitialData()
          .then(({ users, questions }) => {  //we want to add those to redux store
             dispatch (getUsers(users))
             dispatch (getQuestions(questions))
             dispatch (setAuthedUser(AUTHED_ID))
             //we'll set up reducers for these to handle their dispatches (modify based on their actions)
             //cuz we're returning a function, we have to use thunk middleware
             //dispatch(hideLoading())
          })
    }
}