import {Dispatch} from "redux";
import {authAPI} from "../../../DAL/api/authAPI";
import {setLoadingAC} from "../profile-reducer";
import {setAppErrorMessage} from "../app-reducer";


const initialState = {
	passwordIsUpdated: false,
}

type InitialStateType = typeof initialState

export const recoveryPasswordReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
	switch (action.type) {
		case "recoveryPassword/PASSWORD-IS-CONFIRMED" : {
			return {...state, passwordIsUpdated: action.value}
		}
	}
	return state
}


//Action creators

const updatePassword = (value: boolean) => {
	return {type: 'recoveryPassword/PASSWORD-IS-CONFIRMED', value} as const
}

// Thanks

export const recoveryPasswordTC = (password: string, userId: string) => (dispatch: Dispatch) => {
	dispatch(setLoadingAC(true))
	authAPI.setNewPassword(password, userId)
		.then(res => {
			dispatch(updatePassword(true))
		})
		.catch(error => {
			dispatch(setAppErrorMessage(error.response.data.error))
		})
		.finally(() => dispatch(setLoadingAC(false)))
}

// types

type ActionsType = ReturnType<typeof updatePassword>