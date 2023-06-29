import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-logger'
import cakeReducer from './cake/cakeReducer'
import rootReducer from './rootReducer';
import userReducer from './user/userReducer'

// const store = createStore(rootReducer);
// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)));
const store = createStore(cakeReducer);
// const store = createStore(userReducer, composeWithDevTools(applyMiddleware(logger, thunk)));

export default store