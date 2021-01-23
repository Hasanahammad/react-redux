import {FETCH_USERS} from '../actions/fetchUsers';
const userReducer = (state = {}, {type, payload}) => {
    switch(type) {
        case FETCH_USERS :
        console.log(payload);
        return payload
        
        default :
    return state
    
};
};
export default userReducer;