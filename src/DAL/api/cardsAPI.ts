import axios from 'axios'
import {NewCardsPackType} from "../../UI/common/components-common/AddItemWindow/AddItemWindow";


const instance = axios.create({
	baseURL: 'https://neko-back.herokuapp.com/2.0/',
	withCredentials: true
})

export const cardsAPI = {
	getCardsPack() {
		return instance.get<ICardsPackResponse>('cards/pack?pageCount=20')
	},
	getMyModules(userId: string) {
		return instance.get<ICardsPackResponse>(`cards/pack&user_id=${userId}`)
	},
	addCardsPack(newCardsPack: NewCardsPackType) {
		return instance.post<INewCardsPackResponse>('cards/pack', {cardsPack: newCardsPack})
	},
	setNewCardsPackName(name: string, _id: string) {
		return instance.put<IUpdatedCardsPackResponse>('cards/pack', {cardsPack: {name, _id}})
	},
	deleteCardsPackItem(id: string) {
		return instance.delete<IDeletedCardsPackResponse>(`cards/pack?id=${id}`)
	}
}

// types and interfaces

interface ICardsPackResponse {
	cardPacks: Array<ICardsPacks>
	cardPacksTotalCount: number // количество колод
	maxCardsCount: number
	minCardsCount: number
	page: number // выбранная страница
	pageCount: number // количество элементов на странице
}

interface IDeletedCardsPackResponse {
	deletedCardsPack: ICardsPacks
	token: string
	tokenDeathTime: number
}

interface IUpdatedCardsPackResponse {
	updatedCardsPack: ICardsPacks
	token: string
	tokenDeathTime: number
}

interface INewCardsPackResponse {
	newCardsPack: ICardsPacks
	token: string
	tokenDeathTime: number
}

export interface ICardsPacks {
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


