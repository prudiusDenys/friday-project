const initState: StateType = {
	errorMessage: null,
	snackbarStatus: {
		status: undefined,
		snackbarMessage: null
	},
	success: true,
}

export const appReducer = (state: StateType = initState, action: ActionType): StateType => {
	switch (action.type) {
		case "app/SET-STATUS": {
			return {...state, success: action.success}
		}
		case "app/SET-ERROR-MESSAGE": {
			return {
				...state,
				errorMessage: action.errorMessage,
				snackbarStatus: {...state.snackbarStatus, status: action.status}
			}
		}
		case "app/SET-STATUS-MESSAGE": {
			return {
				...state,
				snackbarStatus: {
					...state.snackbarStatus,
					status: action.status,
					snackbarMessage: action.snackbarMessage
				}
			}
		}
		default:
			return state
	}
}

// Action
export const setAppErrorMessage = (errorMessage: string | null, status: 'error' | undefined) => {
	return {type: 'app/SET-ERROR-MESSAGE', errorMessage, status} as const
}

export const setAppStatusMessage = (snackbarMessage: string | null, status: StatusType) => {
	return {type: 'app/SET-STATUS-MESSAGE', snackbarMessage, status } as const
}


export const setAppStatus = (success: boolean) => ({type: 'app/SET-STATUS', success} as const)
// Thunk

// Types
type StateType = {
	errorMessage: string | null
	snackbarStatus: SeverityStatusType
	success: boolean
}

export type SeverityStatusType = {
	status: StatusType
	snackbarMessage: null | string
}

export type StatusType = "success" | "info" | "warning" | "error" | undefined

type ActionType = AppErrorMessageType | AppStatusType | ReturnType<typeof setAppStatusMessage>
export type AppErrorMessageType = ReturnType<typeof setAppErrorMessage>
export type AppStatusType = ReturnType<typeof setAppStatus>