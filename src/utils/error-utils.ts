import {Dispatch} from "redux";
import {AppErrorMessageType, setAppErrorMessage} from "../BLL/reducers/app-reducer";

export const handleServerNetworkError = (error: ServerErrorType, dispatch: DispatchType) => {
	const errorMessage = error.response.data.error ? error.response.data.error : 'Some error :('
	dispatch(setAppErrorMessage(errorMessage, "error"))
}

type DispatchType = Dispatch<AppErrorMessageType>
type ServerErrorType = {response:{data:{error: string}}}