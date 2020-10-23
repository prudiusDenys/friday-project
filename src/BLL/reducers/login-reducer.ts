import {Dispatch} from "redux";
import {LoginParamsType, RequestsAPI} from "../../DAL/api/ReuqestsAPI";
import {handleServerNetworkError} from "../../utils/error-utils";
import {setAppStatus} from "./app-reducer";

const initState: StateType = {isSignIn: false}

export const loginReducer = (state: StateType = initState, action: ActionType): StateType => {
    switch (action.type) {
        case "login/IS-SIGN-IN": {
            return {...state, isSignIn: action.isSignIn}
        }
        default: return state
    }
}

// Action
export const isSignIn = (isSignIn: boolean) => ({type: 'login/IS-SIGN-IN', isSignIn} as const)

// Thunk
export const loginTC = (data: LoginParamsType) => (dispatch: Dispatch) => {
    dispatch(setAppStatus(false))
    RequestsAPI.login(data)
        .then(res => {
            dispatch(isSignIn(true))
            dispatch(setAppStatus(true))
        })
        .catch(err => {
            handleServerNetworkError(err, dispatch)
            dispatch(setAppStatus(true))
        })
}

// Types
type StateType = {isSignIn: boolean}
type ActionType = IsSignInType
type IsSignInType = ReturnType<typeof isSignIn>