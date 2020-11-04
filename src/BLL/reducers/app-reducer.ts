import {Dispatch} from "redux";
import {authAPI} from "../../DAL/api/authAPI";
import {isSignIn, setUser} from "./authReducers/login-reducer";

const initState: StateType = {
	errorMessage: null,
	success: true,
	isInitialized: false,
	isSuccessfulMessage: false,
	inputTableValue: ''
}

export const appReducer = (state: StateType = initState, action: ActionType): StateType => {
	switch (action.type) {
		case "app/SET-STATUS": {
			return {...state, success: action.success}
		}
		case "app/SET-ERROR-MESSAGE": {
			return {...state, errorMessage: action.errorMessage}
		}
		case "app/SET-APP-INITIALIZED": {
			return {...state, isInitialized: action.value}
		}
		case "app/SET-SUCCESS-MESSAGE": {
			return {...state, isSuccessfulMessage: action.value}
		}
		case "app/SET-INPUT-TABLE-VALUE":{
			return {...state, inputTableValue: action.value}
		}
		default:
			return state
	}
}

// Action
export const setAppErrorMessage = (errorMessage: string | null) => {
	return {type: 'app/SET-ERROR-MESSAGE', errorMessage} as const
}
export const setAppInitialized = (value: boolean) => {
	return {type: 'app/SET-APP-INITIALIZED', value} as const
}
export const setSuccessfulMessage = (value: boolean) => {
	return {type: 'app/SET-SUCCESS-MESSAGE', value} as const
}
export const setInputTableValue = (value: string) => {
	return {type: 'app/SET-INPUT-TABLE-VALUE', value} as const
}

export const setAppStatus = (success: boolean) => ({type: 'app/SET-STATUS', success} as const)
// Thunk

export const initializeAppTC = () => (dispatch: Dispatch) => {
	authAPI.me()
		.then(res => {
			dispatch(isSignIn(true))
			dispatch(setUser(res.data))
		})
		.finally(() => dispatch(setAppInitialized(true)))
}

// Types
type StateType = {
	errorMessage: string | null
	success: boolean
	isInitialized: boolean
	isSuccessfulMessage: boolean
	inputTableValue: string
}

type ActionType = AppErrorMessageType
	| AppStatusType
	| ReturnType<typeof setAppInitialized>
	| ReturnType<typeof setUser>
	| ReturnType<typeof setSuccessfulMessage>
	| ReturnType<typeof setInputTableValue>
export type AppErrorMessageType = ReturnType<typeof setAppErrorMessage>
export type AppStatusType = ReturnType<typeof setAppStatus>