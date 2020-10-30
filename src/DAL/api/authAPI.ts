import axios from 'axios'
import {UserDataType} from "../../UI/components/RegistrationForm/RegistrationForm";

const instance = axios.create({
	baseURL: 'https://neko-back.herokuapp.com/2.0/',
	withCredentials: true
})

export const authAPI = {
	createUser(userData: UserDataType) {
		return instance.post<ICreateUser>('auth/register', userData)
	},
	login(data: LoginParamsType) {
		return instance.post<IResponseLogin>(`auth/login`, data)
	},
	me() {
		return instance.post<IResponseMe>('auth/me', {})
	},
	logout() {
		return instance.delete<{ info: string, error: string }>('auth/me')
	},
	sendRecoveryEmail(email: string) {
		return instance.post<{ info: string, error: string }>('auth/forgot', {
			email: email,
			from: 'testdenis12345@gmail.com',
			message: `<div style="background-color: lime; padding: 15px"> 
					password recovery link: 	
					<a href='https://prudiusdenys.github.io/friday-project/#/recovery/$token$'>link</a></div>`
		})
	},
	setNewPassword(password: string, userId: string) {
		return instance.post<{ info: string, error: string }>('auth/set-new-password', {password: password, resetPasswordToken: userId	})
	}
}

// types and interfaces

// common interface
interface IResponse{
	created: string
	email: string
	isAdmin: boolean
	name: string
	rememberMe: boolean
	updated: string
	verified: boolean
	_id: string
	publicCardPacksCount: number // количество колод
}

interface ICreateUser{
	addedUser : IResponse
	success: boolean
}

export interface IResponseLogin extends IResponse  {
	avatar?: string
	token?: string,
	tokenDeathTime?: number
	error: string | null,
}

export type LoginParamsType = {
	email: string
	password: string
	rememberMe?: boolean
}

interface IResponseMe extends IResponse{
	avatar?: string
	error: string
}