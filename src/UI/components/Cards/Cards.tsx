import React, {ChangeEvent, useEffect, useMemo, useState} from "react";
import classes from "./Cards.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {rootReducers} from "../../../BLL/store";
import {
	deleteCardsPackItemTC,
	inputSearchValueAC,
	searchCardsPackTC,
	setNewCardsPackNameTC
} from "../../../BLL/reducers/cardsReducer/cardsPack-reducer";
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import {AddItemWindow} from "../../common/components-common/AddItemWindow/AddItemWindow";
import {Table} from "../../common/components-common/Table/Table";
import {CircleLoading} from "../../common/components-common/Loading/CircleLoading";
import {Redirect} from "react-router-dom";
import {getCardsTC} from "../../../BLL/reducers/cardsReducer/cardsCard-reducer";
import {ICards} from "../../../DAL/api/cardsAPI";


export const Cards = React.memo(() => {

	const isSignIn = useSelector<rootReducers, boolean>(state => state.login.isSignIn)
	const cardsPackID = useSelector<rootReducers, string | null>(state => state.cardsPack.cardsPackId)
	const cards = useSelector<rootReducers, Array<ICards>>(state => state.cards.cards)
	const loading = useSelector<rootReducers, boolean>(state => state.profile.loading)


	const inputValue = useSelector<rootReducers, string>(state => state.cardsPack.inputSearchValue)
	const dispatch = useDispatch()
	const [addItemMode, setAddItemMode] = useState(false)
	const [searchMode, setSearchMode] = useState(false)

	useEffect(() => {
		if (cardsPackID) {
			dispatch(getCardsTC(cardsPackID))
		}
	}, [dispatch])

	const columns = useMemo(() => {
		return (
			[
				{
					Header: 'Question',
					accessor: 'question',
				},
				{
					Header: 'Answer',
					accessor: 'answer'
				},
				{
					Header: 'Grade',
					accessor: 'grade'
				},
				{
					Header: 'Updated',
					accessor: 'updated'
				},
				{
					Header: 'Url',
					accessor: ''
				}
			]
		)
	}, [])

	const data = useMemo(() => cards, [cards])

	const AddItemHandler = () => setAddItemMode(true)

	const editTableItem = (name: string, id: string) => {
		dispatch(setNewCardsPackNameTC(name, id))
	}
	const deleteTableItem = (id: string) => {
		dispatch(deleteCardsPackItemTC(id))
	}
	const onSearchIconHandler = () => {
		setSearchMode(true)
	}
	const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
		dispatch(inputSearchValueAC(e.currentTarget.value))
	}
	const onBlurInputHandler = () => {
		setSearchMode(false)
	}
	const onKeyPressInputHandler = (e: any) => {
		if (e.charCode === 13 && inputValue) {
			dispatch(searchCardsPackTC(inputValue))
			setSearchMode(false)
			dispatch(inputSearchValueAC(''))
		}
	}
	const onMouseDownSearchBtnHandler = () => {
		if (inputValue) {
			dispatch(searchCardsPackTC(inputValue))
			setSearchMode(false)
			dispatch(inputSearchValueAC(''))
		}
	}

	if (!isSignIn) return <Redirect to={'/Login'}/>

	return (
		<div className={classes.cardsPack}>
			{loading && <CircleLoading/>}
			<div className={classes.titleBlock}>
				<div className={classes.title}>
					<h1>Cards</h1>
				</div>
				<div className={classes.icons}>
					{
						searchMode ?
							<div className={classes.search}>
								<input type="text" autoFocus onChange={onChangeInputHandler} onKeyPress={onKeyPressInputHandler}
											 value={inputValue} onBlur={onBlurInputHandler}/>
								<button className={classes.searchBtn} onMouseDown={onMouseDownSearchBtnHandler}>Search</button>
							</div>
							:
							<SearchIcon style={{width: '30px', height: '30px', cursor: 'pointer'}} onClick={onSearchIconHandler}/>
					}
					<AddIcon style={{width: '30px', height: '30px', cursor: 'pointer', marginLeft: '20px'}}
									 onMouseDown={AddItemHandler}/>
				</div>
			</div>
			{
				addItemMode
				&&
        <AddItemWindow title={'Add new module'} checkboxLabel={'Private Module'} setAddItemMode={setAddItemMode}/>
			}
			<Table data={data} columns={columns} deleteTableItem={deleteTableItem} editTableItem={editTableItem}/>
		</div>
	)
})