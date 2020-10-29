import axios from 'axios'
import {UserDataType} from "../../UI/components/RegistrationForm/RegistrationForm";

const instance = axios.create ({
	baseURL: 'https://neko-back.herokuapp.com/2.0/',
	withCredentials: true
})

export const authAPI = {
	createUser (userData: UserDataType) {
		return 	instance.post<CreateUserType>('auth/register', userData)
	},
	login(data: LoginParamsType) {
		return instance.post<ResponseLoginType>(`auth/login`, data)
	},
	me(){
		return instance.post<ResponseMeType>('auth/me',{})
	},
	logout(){
		return instance.delete<DeleteType>('auth/me')
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

export type ResponseLoginType = {
	_id: string
	email: string
	name: string
	avatar?: string
	publicCardPacksCount: number // количество колод
	created: string // Date
	updated: string // Date
	isAdmin: boolean
	verified: boolean // подтвердил ли почту
	rememberMe: boolean
	token?: string,
	tokenDeathTime?: number
	error: string | null,
}

export type LoginParamsType = {
	email: string
	password: string
	rememberMe: boolean
}

type ResponseMeType ={
	_id: string
	email: string
	name: string
	avatar? : string
	publicCardPacksCount: number // количество колод
	created: Date
	updated: Date
	isAdmin: boolean
	verified: boolean // подтвердил ли почту
	rememberMe: boolean
	error: string
}
type DeleteType = {
	info: "logOut success —ฅ/ᐠ.̫ .ᐟ\ฅ—"
	error: string
}