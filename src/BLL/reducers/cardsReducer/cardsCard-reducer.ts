import {Dispatch} from "redux";
import {setLoadingAC} from "../profile-reducer";
import {handleServerNetworkError} from "../../../utils/error-utils";
import {cardsAPI, ICards, ICardsResponse} from "../../../DAL/api/cardsAPI";

const initialState: InitialStateType = {
	cards: [
		{
			answer: '',
			cardsPack_id: '',
			comments: '',
			created: '',
			grade: null,
			more_id: '',
			question: '',
			rating: null,
			shots: null,
			type: '',
			updated: '',
			user_id: '',
			__v: null,
			_id: '',
		}
	],
	cardsTotalCount: null,
	maxGrade: null,
	minGrade: null,
	page: null,
	pageCount: null,
	token: '',
	tokenDeathTime: null
}


export const cardsReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
	switch (action.type) {
		case "cards/SET-CARDS": {
			return {
				...state,
				cards: [...action.cards.cards],
				cardsTotalCount: action.cards.cardsTotalCount,
				maxGrade: action.cards.maxGrade,
				minGrade: action.cards.minGrade,
				page: action.cards.page,
				pageCount: action.cards.pageCount,
				token: action.cards.token,
				tokenDeathTime: action.cards.tokenDeathTime
			}
		}
		// case "cardsPack/SET-NEW-CARDS-PACK-NAME": {
		// 	return {...state, newCardsPack: {...state.newCardsPack, name: action.name}}
		// }
		// case "cardsPack/SET-NEW-CARDS-PACK": {
		// 	return {...state, cardPacks: [action.newCardsPacks, ...state.cardPacks]}
		// }
		// case "cardsPack/DELETE-CARDS-PACK-ITEM": {
		// 	return {...state, cardPacks: [...state.cardPacks.filter(i => i._id !== action.id)]}
		// }
		// case "cardsPack/UPDATE-CARDS-PACK-ITEM": {
		// 	return {
		// 		...state,
		// 		cardPacks: [...state.cardPacks.map(i=>{
		// 			if(i._id === action.updatedCardsPack._id){
		// 				return(
		// 					{...i, name: action.updatedCardsPack.name}
		// 				)
		// 			}else{
		// 				return i
		// 			}
		// 		})]
		// 	}
		// }
		// case "cardsPack/SET-SEARCH-VALUE":{
		// 	return {
		// 		...state, inputSearchValue: action.inputValue
		// 	}
		// }
		default:
			return state
	}
}


//actions

const setCardsAC = (cards: ICardsResponse) => {
	return {type: 'cards/SET-CARDS', cards} as const
}

// const setNewCardsPackAC = (newCardsPacks: any) => {
// 	return {type: 'cardsPack/SET-NEW-CARDS-PACK', newCardsPacks} as const
// }
//
// export const getNewCardsPackNameAC = (name: string) => {
// 	return {type: 'cardsPack/SET-NEW-CARDS-PACK-NAME', name} as const
// }
//
// export const deleteCardsPackItemAC = (id: string) => {
// 	return {type: 'cardsPack/DELETE-CARDS-PACK-ITEM', id} as const
// }
// export const updateCardsPackItemAC = (updatedCardsPack: ICardsPacks) => {
// 	return {type: 'cardsPack/UPDATE-CARDS-PACK-ITEM', updatedCardsPack} as const
// }
// export const inputSearchValueAC = (inputValue: string) => {
// 	return {type: 'cardsPack/SET-SEARCH-VALUE', inputValue} as const
// }

// thunks

export const getCardsTC = (id: string) => (dispatch: Dispatch) => {
	dispatch(setLoadingAC(true))
	cardsAPI.getCards(id)
		.then(res => {
			dispatch(setCardsAC(res.data))
		})
		.catch(err => {
			handleServerNetworkError(err, dispatch)
		})
		.finally(() => dispatch(setLoadingAC(false)))
}
export const addCardsTC = (card: any) => (dispatch: Dispatch) => {
	dispatch(setLoadingAC(true))
	cardsAPI.setCard(card)
		.then(res => {
			// dispatch(setNewCardsPackAC(res.data.newCardsPack))
		})
		.catch(err => {
			handleServerNetworkError(err, dispatch)
		})
		.finally(() => dispatch(setLoadingAC(false)))
}

export const setNewCardTC = (id: string) => (dispatch: Dispatch) => {
	dispatch(setLoadingAC(true))
	cardsAPI.setNewCardName(id)
		.then(res => {
			// dispatch(updateCardsPackItemAC(res.data.updatedCardsPack))
		})
		.catch(err => {
			handleServerNetworkError(err, dispatch)
		})
		.finally(() => dispatch(setLoadingAC(false)))
}

export const deleteCardTC = (id: string) => (dispatch: Dispatch) => {
	dispatch(setLoadingAC(true))
	cardsAPI.deleteCard(id)
		.then(res => {
			// dispatch(deleteCardsPackItemAC(res.data.deletedCardsPack._id))
		})
		.catch(err => {
			handleServerNetworkError(err, dispatch)
		})
		.finally(() => dispatch(setLoadingAC(false)))
}
export const searchCards = (searchValue: string) => (dispatch: Dispatch) => {
	dispatch(setLoadingAC(true))
	cardsAPI.searchCards(searchValue)
		.then(res => {
			// dispatch(setCardsPackAC(res.data.cardPacks))
		})
		.catch(err => {
			handleServerNetworkError(err, dispatch)
		})
		.finally(() => dispatch(setLoadingAC(false)))
}

//types

type InitialStateType = {
	cards: Array<ICards>
	cardsTotalCount: number | null
	maxGrade: number | null
	minGrade: number | null
	page: number | null
	pageCount: number | null
	token: string
	tokenDeathTime: number | null
}

type ActionType = ReturnType<typeof setCardsAC>


