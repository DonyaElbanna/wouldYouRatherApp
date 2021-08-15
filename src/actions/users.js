export const GET_USERS = "GET_USERS";

//action creator
export function getUsers(users) {
  return {
    type: GET_USERS,
    users,
  };
}
