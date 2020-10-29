import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import {profileReducer} from "./reducers/profile-reducer";
import {registrationReducer} from "./reducers/registration-reducer";
import {loginReducer} from "./reducers/login-reducer";
import {appReducer} from "./reducers/app-reducer";
import {recoveryPasswordReducer} from "./reducers/recoveryPassword-reducer";
import {forgotPasswordReducer} from "./reducers/forgotPassword-reducer";

const reducers = combineReducers({
	profile: profileReducer,
	registration: registrationReducer,
	login: loginReducer,
	app: appReducer,
	recoveryPassword: recoveryPasswordReducer,
	forgotPassword: forgotPasswordReducer
})

export type rootReducers = ReturnType<typeof reducers>
export const store = createStore(reducers, applyMiddleware(thunkMiddleware))

// @ts-ignore
window.store = store