import {Dispatch} from "redux";
import {LoginParamsType, authAPI, IResponseLogin} from "../../DAL/api/authAPI";
import {handleServerNetworkError} from "../../utils/error-utils";
import {setAppStatus} from "./app-reducer";
import {setLoadingAC} from "./profile-reducer";

const initState: StateType = {
	isSignIn: false,
	created: '',
	email: '',
	isAdmin: false,
	name: '',
	publicCardPacksCount: 0,
	rememberMe: false,
	token: '',
	tokenDeathTime: 1604256677868,
	updated: '',
	verified: true,
	__v: 0,
	_id: '',
}

export const loginReducer = (state: StateType = initState, action: ActionType): StateType => {
	switch (action.type) {
		case "Login/IS-SIGN-IN": {
			return {...state, isSignIn: action.isSignIn}
		}
		case "Login/SET-USER": {
			return {...state, ...action.data}
		}
		default:
			return state
	}
}

// Action

export const isSignIn = (isSignIn: boolean) => ({type: 'Login/IS-SIGN-IN', isSignIn} as const)
export const setUser = (data: IResponseLogin) => ({type: 'Login/SET-USER', data} as const)

// Thunk

export const loginTC = (data: LoginParamsType) => (dispatch: Dispatch) => {
	dispatch(setAppStatus(false))
	dispatch(setLoadingAC(true))
	authAPI.login(data)
		.then(res => {
			dispatch(setUser(res.data))
			dispatch(isSignIn(true))
			dispatch(setAppStatus(true))
		})
		.catch(err => {
			handleServerNetworkError(err, dispatch)
			dispatch(setAppStatus(true))
		})
		.finally(() => dispatch(setLoadingAC(false)))
}

export const logoutTC = () => (dispatch: Dispatch) => {
	dispatch(setLoadingAC(true))
	authAPI.logout()
		.then(res => {
			dispatch(isSignIn(false))
		})
		.catch(err => {
			debugger
			handleServerNetworkError(err, dispatch)
		})
		.finally(() => dispatch(setLoadingAC(false)))
}

// Types

type StateType = {
	isSignIn: boolean,
	created: string,
	email: string,
	isAdmin: boolean,
	name: string,
	publicCardPacksCount: number,
	rememberMe: boolean,
	token: string,
	tokenDeathTime: number,
	updated: string,
	verified: boolean,
	__v: number,
	_id: string,
}
type ActionType = IsSignInType | ReturnType<typeof setUser>
type IsSignInType = ReturnType<typeof isSignIn>