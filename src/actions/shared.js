import { getInitialData } from "../utils/api";
import { getUsers } from "../actions/users";
import { getQuestions } from "../actions/questions";
import { showLoading, hideLoading } from "react-redux-loading";
//before getInitialData we showLoading, and after getting data we invoke hide loading

//thunk action creator
export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData() //this will get users and questions data
      .then(({ users, questions }) => {
        //we want to add those to redux store
        dispatch(getUsers(users));
        dispatch(getQuestions(questions));
        //we'll set up reducers for these to handle their dispatches (modify based on their actions)
        //cuz we're returning a function, we have to use thunk middleware
        dispatch(hideLoading());
      });
  };
}
