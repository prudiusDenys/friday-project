import axios from 'axios'


const instance = axios.create({
	baseURL: 'https://neko-back.herokuapp.com/2.0',
	withCredentials: true
})

export const cardsAPI = {
	getCardsPack(userId: any) {
		return instance.get<ICardsPackResponse>('cards/pack', userId)
	},
}

// types and interfaces


interface ICardsPackResponse{
	cardPacks: Array<ICardsPacks>
	cardPacksTotalCount: number // количество колод
	maxCardsCount: number
	minCardsCount: number
	page: number // выбранная страница
	pageCount: number // количество элементов на странице
}

export interface ICardsPacks {
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


