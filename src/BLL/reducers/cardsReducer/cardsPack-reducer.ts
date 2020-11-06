import {Dispatch} from "redux";
import {setLoadingAC} from "../profile-reducer";
import {packsAPI, ICardsPacks, ICardsPackResponse} from "../../../DAL/api/packsAPI";
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
	cardPacksTotalCount: 0,
	maxCardsCount: 0,
	minCardsCount: 0,
	page: 1,
	pageCount: 10,
	token: '',
	tokenDeathTime: 0,
	newCardsPack: {
		name: '',
		private: false
	},
	inputSearchValue: '',
	cardsPackId: null
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
		case "cardsPack/DELETE-CARDS-PACK-ITEM": {
			return {...state, cardPacks: [...state.cardPacks.filter(i => i._id !== action.id)]}
		}
		case "cardsPack/UPDATE-CARDS-PACK-ITEM": {
			return {
				...state,
				cardPacks: [...state.cardPacks.map(i => {
					if (i._id === action.updatedCardsPack._id) {
						return {...i, name: action.updatedCardsPack.name}
					} else {
						return i
					}
				})]
			}
		}
		case "cardsPack/SET-SEARCH-VALUE": {
			return {
				...state, inputSearchValue: action.inputValue
			}
		}
		case "cardsPack/SET-PACK-ID": {
			return {
				...state, cardsPackId: action.cardsId
			}
		}
		case "cardsPack/GET-PAGE": {
			return {
				...state,
				page: action.data.page,
				pageCount: action.data.pageCount,
				cardPacksTotalCount: action.data.cardPacksTotalCount,
				maxCardsCount: action.data.maxCardsCount,
				minCardsCount: action.data.minCardsCount,
				cardPacks: [...action.data.cardPacks]
			}
		}
		default:
			return state
	}
}


// Action
export const setCardsPackAC = (cardsPacks: Array<ICardsPacks>) => {
	return {type: 'cardsPack/SET-CARDS-PACK', cardsPacks} as const
}
const setNewCardsPackAC = (newCardsPacks: any) => {
	return {type: 'cardsPack/SET-NEW-CARDS-PACK', newCardsPacks} as const
}
export const getNewCardsPackNameAC = (name: string) => {
	return {type: 'cardsPack/SET-NEW-CARDS-PACK-NAME', name} as const
}
export const deleteCardsPackItemAC = (id: string) => {
	return {type: 'cardsPack/DELETE-CARDS-PACK-ITEM', id} as const
}
export const updateCardsPackItemAC = (updatedCardsPack: ICardsPacks) => {
	return {type: 'cardsPack/UPDATE-CARDS-PACK-ITEM', updatedCardsPack} as const
}
export const inputSearchValueAC = (inputValue: string) => {
	return {type: 'cardsPack/SET-SEARCH-VALUE', inputValue} as const
}
export const setCardsPackIdAC = (cardsId: string) => {
	return {type: 'cardsPack/SET-PACK-ID', cardsId} as const
}
const getCurrentPage = (data: ICardsPackResponse) => ({type: 'cardsPack/GET-PAGE', data} as const)

// Thunk
export const getCardsPackTC = (rows: number, currentPage: number) => (dispatch: Dispatch) => {

	dispatch(setLoadingAC(true))

	packsAPI.getCardsPack(rows, currentPage)
		.then(res => {
			console.log(res.data)
			dispatch(getCurrentPage(res.data))
			dispatch(setCardsPackAC(res.data.cardPacks))
		})
		.catch(err => {
			handleServerNetworkError(err, dispatch)
		})
		.finally(() => dispatch(setLoadingAC(false)))
}

export const addCardsPackTC = (newCardsPack: NewCardsPackType) => (dispatch: Dispatch) => {

	dispatch(setLoadingAC(true))

	packsAPI.addCardsPack(newCardsPack)
		.then(res => {
			dispatch(setNewCardsPackAC(res.data.newCardsPack))
		})
		.catch(err => {
			handleServerNetworkError(err, dispatch)
		})
		.finally(() => dispatch(setLoadingAC(false)))
}

export const setNewCardsPackNameTC = (name: string, id: string) => (dispatch: Dispatch) => {

	dispatch(setLoadingAC(true))

	packsAPI.setNewCardsPackName(name, id)
		.then(res => {
			dispatch(updateCardsPackItemAC(res.data.updatedCardsPack))
		})
		.catch(err => {
			handleServerNetworkError(err, dispatch)
		})
		.finally(() => dispatch(setLoadingAC(false)))
}

export const deleteCardsPackItemTC = (id: string) => (dispatch: Dispatch) => {

	dispatch(setLoadingAC(true))

	packsAPI.deleteCardsPackItem(id)
		.then(res => {
			dispatch(deleteCardsPackItemAC(res.data.deletedCardsPack._id))
		})
		.catch(err => {
			handleServerNetworkError(err, dispatch)
		})
		.finally(() => dispatch(setLoadingAC(false)))
}

export const searchCardsPackTC = (searchValue: string) => (dispatch: Dispatch) => {

	dispatch(setLoadingAC(true))

	packsAPI.searchCardsPack(searchValue)
		.then(res => {
			dispatch(setCardsPackAC(res.data.cardPacks))
		})
		.catch(err => {
			handleServerNetworkError(err, dispatch)
		})
		.finally(() => dispatch(setLoadingAC(false)))
}

//types
type InitialStateType = ICardsPackResponse & {
	token: string
	tokenDeathTime: number
	newCardsPack: {
		name: string
		private: boolean
	}
	inputSearchValue: string
	cardsPackId: null | string
}

type ActionType = ReturnType<typeof setCardsPackAC>
	| ReturnType<typeof getNewCardsPackNameAC>
	| ReturnType<typeof setNewCardsPackAC>
	| ReturnType<typeof deleteCardsPackItemAC>
	| ReturnType<typeof updateCardsPackItemAC>
	| ReturnType<typeof inputSearchValueAC>
	| ReturnType<typeof setCardsPackIdAC>
	| ReturnType<typeof getCurrentPage>