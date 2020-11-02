import {Dispatch} from "redux";
import {authAPI} from "../../../DAL/api/authAPI";
import {setLoadingAC} from "../profile-reducer";
import {setAppErrorMessage, setSuccessfulMessage} from "../app-reducer";


const initialState = {
	emailSentSuccessful: false,

}

type InitialStateType = typeof initialState

export const forgotPasswordReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
	switch (action.type) {
		case "forgotPassword/EMAIL-SET-SUCCESSFUL" : {
			return {...state, emailSentSuccessful: action.value}
		}
	}
	return state
}

//Action creators

export const emailSentSuccessfulAC = (value: boolean) => {
	return {type: 'forgotPassword/EMAIL-SET-SUCCESSFUL', value} as const
}

// Thanks

export const forgotPasswordTC = (email: string) => (dispatch: Dispatch) => {
	dispatch(setLoadingAC(true))
	authAPI.sendRecoveryEmail(email)
		.then(res => {
			dispatch(emailSentSuccessfulAC(true))
			dispatch(setSuccessfulMessage(true))
		})
		.catch(error => {
			dispatch(setAppErrorMessage(error.response.data.error))
		})
		.finally(() => dispatch(setLoadingAC(false)))
}

// types

type ActionsType = ReturnType<typeof emailSentSuccessfulAC>