import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';

const reducers = combineReducers({

})

export type rootReducers = ReturnType<typeof reducers>

export const store = createStore(reducers, applyMiddleware(thunkMiddleware))