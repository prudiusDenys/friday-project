import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import {profileReducer} from "./reducers/profile-reducer";
import {registrationReducer} from "./reducers/registration-reducer";
import {loginReducer} from "./reducers/login-reducer";
import {appReducer} from "./reducers/app-reducer";

const reducers = combineReducers({
	profile: profileReducer,
	registration: registrationReducer,
	login: loginReducer,
	app: appReducer,
})

export type rootReducers = ReturnType<typeof reducers>

export const store = createStore(reducers, applyMiddleware(thunkMiddleware))