import {Dispatch} from "redux";
import {setLoadingAC} from "../profile-reducer";
import {cardsAPI, ICardsPacks} from "../../../DAL/api/cardsAPI";
import {handleServerNetworkError} from "../../../utils/error-utils";
import {NewCardsPackType} from "../../../UI/common/components-common/AddItemWindow/AddItemWindow";

const initialState: InitialStateType = {
	cardPacks: [
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
	],
	newCardsPack: {
		name: '',
		private: false
	},
}


export const cardsPackReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
	switch (action.type) {
		case "cardsPack/SET-CARDS-PACK": {
			return {...state, cardPacks: [...action.cardsPacks]}
		}
		case "cardsPack/SET-NEW-CARDS-PACK-NAME": {
			return {...state, newCardsPack: {...state.newCardsPack, name: action.name}}
		}
		case "cardsPack/SET-NEW-CARDS-PACK": {
			return {...state, cardPacks: [action.newCardsPacks, ...state.cardPacks]}
		}
		default:
			return state
	}
}


//actions

const setCardsPackAC = (cardsPacks: Array<ICardsPacks>) => {
	return {type: 'cardsPack/SET-CARDS-PACK', cardsPacks} as const
}

const setNewCardsPackAC = (newCardsPacks: any) => {
	return {type: 'cardsPack/SET-NEW-CARDS-PACK', newCardsPacks} as const
}

export const getNewCardsPackNameAC = (name: string) => {
	return {type: 'cardsPack/SET-NEW-CARDS-PACK-NAME', name} as const
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


export const addCardsPackTC = (newCardsPack: NewCardsPackType) => (dispatch: Dispatch) => {
	dispatch(setLoadingAC(true))
	cardsAPI.addCardsPack(newCardsPack)
		.then(res => {
			dispatch(setNewCardsPackAC(res.data.newCardsPack))
		})
		.catch(err => {
			handleServerNetworkError(err, dispatch)
		})
		.finally(() => dispatch(setLoadingAC(false)))
}
//types

type InitialStateType = {
	cardPacks: Array<ICardsPacks>,
	newCardsPack: {
		name: string,
		private: boolean
	},
}

type ActionType = ReturnType<typeof setCardsPackAC>
	| ReturnType<typeof getNewCardsPackNameAC>
	| ReturnType<typeof setNewCardsPackAC>

