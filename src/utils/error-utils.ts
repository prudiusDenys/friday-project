import {Dispatch} from "redux";
import {registerErrorAC} from "../BLL/reducers/registration-reducer";
import {AppErrorMessageType, setAppErrorMessage} from "../BLL/reducers/app-reducer";

export const handleServerRegistrationError = (dispatch: Dispatch) => {
	dispatch(registerErrorAC('Email has already existed'))
}
export const handleServerNetworkError = (error: ServerErrorType, dispatch: DispatchType) => {
	const errorMessage = error.response.data.error ? error.response.data.error : 'Some error :('
	dispatch(setAppErrorMessage(errorMessage))
}

type DispatchType = Dispatch<AppErrorMessageType>
type ServerErrorType = {response:{data:{error: string}}}