import axios from 'axios'


const instance = axios.create({
	baseURL: 'https://neko-back.herokuapp.com/2.0',
	withCredentials: true
})

export const cardsAPI = {
	getCardsPack() {
		return instance.get<ICardsPackResponse>('cards/pack')
	},
	getMyModules(userId: string){
		return instance.get<ICardsPackResponse>(`cards/pack&user_id=${userId}`)
	}
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


