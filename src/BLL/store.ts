import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import {profileReducer} from "./reducers/profile-reducer";
import {registrationReducer} from "./reducers/authReducers/registration-reducer";
import {loginReducer} from "./reducers/authReducers/login-reducer";
import {appReducer} from "./reducers/app-reducer";
import {recoveryPasswordReducer} from "./reducers/authReducers/recoveryPassword-reducer";
import {forgotPasswordReducer} from "./reducers/authReducers/forgotPassword-reducer";
import {cardsPackReducer} from "./reducers/cardsReducer/cardsPack-reducer";
import {cardsCardReducer} from "./reducers/cardsReducer/cardsCard-reducer";
import {myModulesReducer} from "./reducers/cardsReducer/myModules-reducer";

const reducers = combineReducers({
	profile: profileReducer,
	registration: registrationReducer,
	login: loginReducer,
	app: appReducer,
	recoveryPassword: recoveryPasswordReducer,
	forgotPassword: forgotPasswordReducer,
	cardsPack: cardsPackReducer,
	myModules: myModulesReducer,
	cardsCard: cardsCardReducer
})

export type rootReducers = ReturnType<typeof reducers>
export const store = createStore(reducers, applyMiddleware(thunkMiddleware))

// @ts-ignore
window.store = store