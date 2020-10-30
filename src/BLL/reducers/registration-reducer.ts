import {Dispatch} from "redux";
import {UserDataType} from "../../UI/components/RegistrationForm/RegistrationForm";
import {authAPI} from "../../DAL/api/authAPI";
import {setLoadingAC} from "./profile-reducer";
import {setAppErrorMessage} from "./app-reducer";

const REGISTRATION_REGISTER_USER = ' REGISTRATION/REGISTER_USER';

const initialState = {
	isRegistered: false,
}

type InitialStateType = typeof initialState

export const registrationReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
	switch (action.type) {
		case REGISTRATION_REGISTER_USER : {
			return {
				...state,
				isRegistered: action.isRegistered
			}
		}
	}
	return state
}


//Action creators

const userRegisteredAC = (isRegistered: boolean) => {
	return {type: REGISTRATION_REGISTER_USER, isRegistered} as const
}

// Thanks

export const userRegisterTC = (userData: UserDataType) => (dispatch: Dispatch) => {
	dispatch(setLoadingAC(true))
	authAPI.createUser(userData)
		.then(res => {
			dispatch(userRegisteredAC(true))
		})
		.catch(error => {
			dispatch(userRegisteredAC(false))
			dispatch(setAppErrorMessage(error.response.data.error))
		})
		.finally(() => dispatch(setLoadingAC(false)))
}

// types

type ActionsType = ReturnType<typeof userRegisteredAC>