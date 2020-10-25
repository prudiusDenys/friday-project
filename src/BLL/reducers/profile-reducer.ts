import {Dispatch} from "redux";

const PROFILE_SET_LOADING = 'PROFILE_SET_LOADING';

const initialState: InitialStateType = {
	status: 'idle',
	error: null,
	isInitialized: false,
	loading: false
}


export const profileReducer = (state: InitialStateType = initialState, action: ActionsType):InitialStateType  => {
	switch (action.type) {
		case PROFILE_SET_LOADING: {
			return {
				...state,
				loading: action.loadingStatus
			}
		}
	}
	return state
}


//Action creators

export const setLoadingAC = (loadingStatus: boolean) => {
	return {type: PROFILE_SET_LOADING, loadingStatus}
}

// Thanks

export const setLoadingTC = (loadingStatus: boolean) => (dispatch: Dispatch) => {
	dispatch(setLoadingAC(loadingStatus))
}


// types

type InitialStateType = {
	status: 'idle' | 'success' | 'failed',
	error: null | string,
	isInitialized: boolean,
	loading: boolean
}
type ActionsType = ReturnType<typeof setLoadingAC>