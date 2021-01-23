export const FETCH_USERS = "FETCH_USERS";
const fetchUsers = (dispatch) => {
  fetch("http://localhost:5000/v1/5ff3f36a1867a114a15e7c26/communities/")
    .then((res) => res.json())
    .then((res) => dispatch({ type: FETCH_USERS, payload: res }));
    
};
export default fetchUsers;
