import {Dispatch} from "redux";
import {registerErrorAC} from "../BLL/reducers/registration-reducer";

export const handleServerRegistrationError = (dispatch: Dispatch) => {
	dispatch(registerErrorAC('Email has already existed'))
}