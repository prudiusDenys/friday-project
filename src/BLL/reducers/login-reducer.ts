import {Dispatch} from "redux";
import {LoginParamsType, authAPI, ResponseLoginType} from "../../DAL/api/authAPI";
import {handleServerNetworkError} from "../../utils/error-utils";
import {setAppStatus} from "./app-reducer";
import {setLoadingAC} from "./profile-reducer";

const initState: StateType = {
	isSignIn: false,
}

export const loginReducer = (state: StateType = initState, action: ActionType): StateType => {
	switch (action.type) {
		case "login/IS-SIGN-IN": {
			return {...state, isSignIn: action.isSignIn}
		}
		case "login/SET-USER": {
			return {...state, ...action.data}
		}
		default:
			return state
	}
}

// Action
export const isSignIn = (isSignIn: boolean) => ({type: 'login/IS-SIGN-IN', isSignIn} as const)
export const setUser = (data: ResponseLoginType) => ({type: 'login/SET-USER', data} as const)

// Thunk
export const loginTC = (data: LoginParamsType) => (dispatch: Dispatch) => {
	dispatch(setAppStatus(false))
	dispatch(setLoadingAC(true))
	authAPI.login(data)
		.then(res => {
			dispatch(isSignIn(true))
			dispatch(setUser(res.data))
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
			handleServerNetworkError(err, dispatch)
		})
		.finally(() => dispatch(setLoadingAC(false)))
}

// Types
type StateType = { isSignIn: boolean }
type ActionType = IsSignInType | ReturnType<typeof setUser>
type IsSignInType = ReturnType<typeof isSignIn>