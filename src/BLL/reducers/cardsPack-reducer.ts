import {Dispatch} from "redux";
import {setLoadingAC} from "./profile-reducer";
import {cardsAPI, ICardsPacks} from "../../DAL/api/cardsAPI";
import {handleServerNetworkError} from "../../utils/error-utils";

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


export const cardsPackReducer = (state: Array<InitialStateType> = initialState, action: ActionType): Array<InitialStateType> => {
	switch (action.type) {
		case "cardsPack/SET-CARDS-PACK": {
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

export const getCardsPackTC = () => (dispatch: Dispatch) => {
	dispatch(setLoadingAC(true))
	cardsAPI.getCardsPack()
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

type ActionType = ReturnType<typeof setCardsPackAC>

