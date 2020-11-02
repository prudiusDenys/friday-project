import React, {useEffect, useMemo, useState} from "react";
import classes from "./CardsPack.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {rootReducers} from "../../../BLL/store";
import {getCardsPackTC} from "../../../BLL/reducers/cardsReducer/cardsPack-reducer";
import {ICardsPacks} from "../../../DAL/api/cardsAPI";
import {Redirect} from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import {AddItemWindow} from "../../common/components-common/AddItemWindow/AddItemWindow";
import {Table} from "../../common/components-common/Table/Table";


export const CardsPack = React.memo(() => {

	const isSignIn = useSelector<rootReducers, boolean>(state => state.login.isSignIn)
	const cardsPack = useSelector<rootReducers, Array<ICardsPacks>>(state => state.cardsPack.cardPacks)
	const dispatch = useDispatch()

	const [addItemMode, setAddItemMode] = useState(false)

	useEffect(() => {
		// do query to the server to get all packs of cards (userID to get only private packs)
		dispatch(getCardsPackTC())
	}, [dispatch])

	const columns = useMemo(() => {
		return (
			[
				{
					Header: 'Name',
					accessor: 'name'
				},
				{
					Header: 'cardsCount',
					accessor: 'cardsCount'
				},
				{
					Header: 'updated',
					accessor: 'updated'
				},
				{
					Header: 'url',
					accessor: ''
				},
			]
		)
	}, [])
	const data = useMemo(() => cardsPack, [cardsPack])

	const AddItemHandler = () => setAddItemMode(true)

	if (isSignIn) return <Redirect to={'/Login'}/>

	return (
		<div className={classes.cardsPack}>
			<div className={classes.titleBlock}>
				<div className={classes.title}>
					<h1>All modules</h1>
				</div>
				<div className={classes.icons}>
					<SearchIcon style={{width: '30px', height: '30px', cursor: 'pointer'}}/>
					<AddIcon style={{width: '30px', height: '30px', cursor: 'pointer', marginLeft: '20px'}}
									 onClick={AddItemHandler}/>
				</div>
			</div>
			{
				addItemMode
				&&
        <AddItemWindow title={'Add new module'} checkboxLabel={'Private Module'} setAddItemMode={setAddItemMode}/>
			}
			<Table data={data} columns={columns}/>
		</div>
	)
})