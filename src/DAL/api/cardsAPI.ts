import axios from 'axios'


const instance = axios.create({
	baseURL: 'https://neko-back.herokuapp.com/2.0/',
	withCredentials: true
})

export const cardsAPI = {
	getCards(id: string) {
		return instance.get<ICardsResponse>(`cards/card?cardsPack_id=${id}&pageCount=20`)
	},
	setCard(card: any) {
		return instance.post<any>(`cards/card`, card)
	},
	setNewCardName(_id: string) {
		return instance.put<any>('cards/pack', {card: {_id}})
	},
	deleteCard(id: string) {
		return instance.delete<any>(`cards/card?id=${id}`)
	},
	searchCards(searchValue: string) {
		return instance.get<any>(`cards/card?cardAnswer=${searchValue}&pageCount=10`)
	}
}

// types and interfaces

export interface ICardsResponse {
	cards: Array<ICards>
	cardsTotalCount: number | null
	maxGrade: number | null
	minGrade: number | null
	page: number | null
	pageCount: number | null
	token: string
	tokenDeathTime: number | null
}

export interface ICards {
	answer: string
	cardsPack_id: string
	comments: string
	created: string
	grade: number | null
	more_id: string
	question: string
	rating: number | null
	shots: number | null
	type: string
	updated: string
	user_id: string
	__v: number | null
	_id: string
}