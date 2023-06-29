import { combineReducers } from 'redux';
import cakeReducer from './cake/cakeReducer';
import userReducer from './user/userReducer';


const rootReducer = combineReducers({
    cakeReducer: cakeReducer,
    userReducer: userReducer,

})

export default rootReducer