import {Dispatch} from "redux";
import {setLoadingAC} from "../profile-reducer";
import {cardsAPI, ICardsPacks} from "../../../DAL/api/cardsAPI";
import {handleServerNetworkError} from "../../../utils/error-utils";

const initialState: Array<InitialStateType> = [
	{
		cardsCount: null,
		created: "",
		grade: null, //средняя оценка карточек
		more_id: "",
		name: "",
		path: "", // папка
		private: false,
		rating: null, // лайки
		shots: null, // количество попыток
		type: "", // ещё будет "folder" (папка)
		updated: "",
		user_id: "",
		user_name: "",
		__v: null,
		_id: "",
	}
]


export const myModulesReducer = (state: Array<InitialStateType> = initialState, action: ActionType): Array<InitialStateType> => {
	switch (action.type) {
		case "myModules/SET-CARDS-PACK": {
			return [...action.myModules]
		}
		default:
			return state
	}
}


//actions

const setMyModulesAC = (myModules: Array<ICardsPacks>) => {
	return {type: 'myModules/SET-CARDS-PACK', myModules} as const
}

// thunks

export const getMyModulesTC = (userId: string) => (dispatch: Dispatch) => {
	dispatch(setLoadingAC(true))
	cardsAPI.getMyModules(userId)
		.then(res => {
			dispatch(setMyModulesAC(res.data.cardPacks))
		})
		.catch(err => {
			handleServerNetworkError(err, dispatch)
		})
		.finally(() => dispatch(setLoadingAC(false)))
}

//types

type InitialStateType = {
	cardsCount: number | null,
	created: string,
	grade: number | null, //средняя оценка карточек
	more_id: string,
	name: string,
	path: string, // папка
	private: boolean,
	rating: number | null, // лайки
	shots: number | null, // количество попыток
	type: string, // ещё будет "folder" (папка)
	updated: string,
	user_id: string,
	user_name: string,
	__v: number | null,
	_id: string,
}

type ActionType = ReturnType<typeof setMyModulesAC>


