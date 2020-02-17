import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import loginFormReducer from './reducers/loginFormReducer.js'
import signupFormReducer from './reducers/signupFormReducer.js'
import currentUserReducer from './reducers/currentUserReducer.js'
import myPlayerCardReducer from './reducers/myPlayerCardReducer.js'
import playerCardFormReducer from './reducers/playerCardFormReducer.js'
import usersReducer from './reducers/usersReducer.js'


const reducer = combineReducers({
    currentUserReducer,
    loginFormReducer,
    signupFormReducer,
    myPlayerCardReducer,
    playerCardFormReducer,
    usersReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)) )

export default store;