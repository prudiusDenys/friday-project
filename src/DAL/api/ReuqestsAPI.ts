import axios from 'axios'
import {UserDataType} from "../../UI/components/RegistrationForm/RegistrationForm";

const instance = axios.create ({
	baseURL: 'https://cards-nya-back.herokuapp.com/1.0/'
})

export const RequestsAPI = {
	createUser (userData: UserDataType) {
		return 	instance.post<CreateUserType>('auth/register', userData)
	}
}


// types

type CreateUserType = {
	addedUser: {
		created: string
		email: string
		isAdmin: boolean
		name: string
		publicCardPacksCount: number
		rememberMe: boolean
		updated: string
		verified: boolean
		__v: number
		_id: string
	}
	success: boolean
}