const initState: StateType = {
    errorMessage: null,
    success: true,
}

export const appReducer = (state: StateType = initState, action: ActionType): StateType => {
    switch (action.type) {
        case "app/SET-STATUS": {
            return {...state, success: action.success}
        }
        case "app/SET-ERROR-MESSAGE": {
            return {...state, errorMessage: action.errorMessage}
        }
        default: return state
    }
}

// Action
export const setAppErrorMessage = (errorMessage: string | null) => ({type: 'app/SET-ERROR-MESSAGE', errorMessage} as const)
export const setAppStatus = (success: boolean) => ({type: 'app/SET-STATUS', success} as const)
// Thunk

// Types
type StateType = {
    errorMessage: string | null
    success: boolean
}
type ActionType = AppErrorMessageType | AppStatusType
export type AppErrorMessageType = ReturnType<typeof setAppErrorMessage>
export type AppStatusType = ReturnType<typeof setAppStatus>