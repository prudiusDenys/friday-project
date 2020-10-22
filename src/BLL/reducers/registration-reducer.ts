import {Dispatch} from "redux";
import {UserDataType} from "../../UI/components/RegistrationForm/RegistrationForm";

const REGISTRATION_REGISTER_USER = ' REGISTRATION_FORM/REGISTER_USER';

const initialState = {
	email: '',
	userName: '',
	password: '',
	isRegistered: false
}

type InitialStateType = typeof initialState


export const registrationReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
	switch (action.type) {
		case REGISTRATION_REGISTER_USER : {
			return {
				...state,
				email: action.userData.email,
				userName: action.userData.userName,
				password: action.userData.password,
				isRegistered: true
			}
		}
	}
	return state
}


//Action creators

const userRegisterAC = (userData: UserDataType) => {
	return {type: REGISTRATION_REGISTER_USER, userData} as const
}

// Thanks

export const userRegisterTC = (userData: UserDataType) => (dispatch: Dispatch) => {
	dispatch(userRegisterAC(userData))
}


// types

type ActionsType = ReturnType<typeof userRegisterAC>