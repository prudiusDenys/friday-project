import {Dispatch} from "redux";
import {UserDataType} from "../../UI/components/RegistrationForm/RegistrationForm";
import {RequestsAPI} from "../../DAL/api/ReuqestsAPI";
import {setLoadingAC} from "./profile-reducer";
import {handleServerRegistrationError} from "../../utils/error-utils";

const REGISTRATION_REGISTER_USER = ' REGISTRATION_FORM/REGISTER_USER';
const REGISTRATION_REGISTER_ERROR = ' REGISTRATION_REGISTER_ERROR';

const initialState = {
	email: '',
	password: '',
	isRegistered: false,
	error: ''
}

type InitialStateType = typeof initialState


export const registrationReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
	switch (action.type) {
		case REGISTRATION_REGISTER_USER : {
			return {
				...state,
				email: action.userData.email,
				password: action.userData.password,
				isRegistered: true
			}
		}
		case REGISTRATION_REGISTER_ERROR:{
			return {
				...state,
				error: action.error
			}
		}
	}
	return state
}


//Action creators

 const userRegisterAC = (userData: UserDataType) => {
	return {type: REGISTRATION_REGISTER_USER, userData} as const
}

export const registerErrorAC = (error: string) => {
	return {type: REGISTRATION_REGISTER_ERROR, error} as const
}

// Thanks

export const userRegisterTC = (userData: UserDataType) => (dispatch: Dispatch) => {
	dispatch(setLoadingAC(true))
	RequestsAPI.createUser(userData)
		.then(res=>{
			dispatch(setLoadingAC(false))
		})
		.catch(error=>{
			handleServerRegistrationError(dispatch)
		})

	dispatch(userRegisterAC(userData))
}


// types

type ActionsType = ReturnType<typeof userRegisterAC> | ReturnType<typeof registerErrorAC>