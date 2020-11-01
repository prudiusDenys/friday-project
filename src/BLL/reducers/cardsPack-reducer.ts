import {Dispatch} from "redux";
import {setLoadingAC} from "./profile-reducer";
import {cardsAPI, ICardsPacks} from "../../DAL/api/cardsAPI";
import {handleServerNetworkError} from "../../utils/error-utils";

const initialState: Array<InitialStateType> = [
	{
		cardsCount: 0,
		created: "",
		grade: 0, //средняя оценка карточек
		more_id: "",
		name: "",
		path: "", // папка
		private: false,
		rating: 0, // лайки
		shots: 0, // количество попыток
		type: "", // ещё будет "folder" (папка)
		updated: "",
		user_id: "",
		user_name: "",
		__v: 0,
		_id: "",
	}
]


export const cardsPackReducer = (state: Array<InitialStateType> = initialState, action: ActionType): Array<InitialStateType> => {
	switch (action.type) {
		case "cardsPack/SET-CARDS-PACK": {
			debugger
			return [...action.cardsPacks]
		}
		default:
			return state
	}
}


//actions

const setCardsPackAC = (cardsPacks: Array<ICardsPacks>) => {
	return {type: 'cardsPack/SET-CARDS-PACK', cardsPacks} as const
}

// thunks

export const getCardsPackTC = (userId: string) => (dispatch: Dispatch) => {
	dispatch(setLoadingAC(true))
	cardsAPI.getCardsPack(userId)
		.then(res => {
			dispatch(setCardsPackAC(res.data.cardPacks))
		})
		.catch(err => {
			handleServerNetworkError(err, dispatch)
		})
		.finally(() => dispatch(setLoadingAC(false)))
}

//types

type InitialStateType = {
	cardsCount: number,
	created: string,
	grade: number, //средняя оценка карточек
	more_id: string,
	name: string,
	path: string, // папка
	private: boolean,
	rating: number, // лайки
	shots: number, // количество попыток
	type: string, // ещё будет "folder" (папка)
	updated: string,
	user_id: string,
	user_name: string,
	__v: number,
	_id: string,
}

type ActionType = ReturnType<typeof setCardsPackAC>


