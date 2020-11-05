import React, {ChangeEvent, useState} from "react";
import classes from "./Table.module.scss";
import {useTable} from "react-table";
import EditIcon from '@material-ui/icons/Edit';
import {useDispatch, useSelector} from "react-redux";
import {setInputTableValue} from "../../../../BLL/reducers/app-reducer";
import {rootReducers} from "../../../../BLL/store";
import {ICardsPacks} from "../../../../DAL/api/packsAPI";
import {IconButton} from "@material-ui/core";
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';
import CloseIcon from '@material-ui/icons/Close';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import {NavLink} from "react-router-dom";
import {setCardsPackIdAC} from "../../../../BLL/reducers/cardsReducer/cardsPack-reducer";

type PropsType = {
	data: Array<any>
	columns: Array<any>
	editTableItem: (name: string, id: string) => void
	deleteTableItem: (id: string) => void
}

export const Table = React.memo((props: PropsType) => {

	const dispatch = useDispatch()
	const inputTableValue = useSelector<rootReducers, string>(state => state.app.inputTableValue)
	const userId = useSelector<rootReducers, string>(state => state.login._id)
	const data = props.data
	const columns = props.columns

	const [id, setId] = useState<string>('')

	const tableInstance = useTable<any>({columns, data})
	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
	} = tableInstance

	const editTableItemHandler = (cardsPack: ICardsPacks) => {
		setId(cardsPack._id)
		dispatch(setInputTableValue(cardsPack.name))
	}
	const deleteTableItemHandler = (id: string) => {
		props.deleteTableItem(id)
	}
	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		dispatch(setInputTableValue(e.currentTarget.value))
	}
	const onBlurHandler = () => {
		if (inputTableValue) {
			props.editTableItem(inputTableValue, id)
		}
		setId('')
	}
	const onkeypressHandler = (e: any) => {
		if (e.charCode === 13 && inputTableValue) {
			props.editTableItem(inputTableValue, id)
			setId('')
		}
	}
	const getPackIdHandler = (id: string) => {
		dispatch(setCardsPackIdAC(id))
	}

	return (
		<table {...getTableProps()} className={classes.table}>
			<thead>
			{
				headerGroups.map((headerGroup, i) => (
					<tr {...headerGroup.getHeaderGroupProps()} key={i}>
						{
							headerGroup.headers.map(column => (
								<th {...column.getHeaderProps()}>
									{
										column.render('Header')}
								</th>
							))}
					</tr>
				))}
			</thead>
			<tbody {...getTableBodyProps()}>
			{rows.map((row, i) => {
				prepareRow(row)
				return (
					<tr {...row.getRowProps()} key={i}>
						{
							row.cells.map((cell, i) => {
								if (i === 0) {
									return (
										<td {...cell.getCellProps()} style={{display: "flex", alignItems: 'center'}}>
											{
												id !== cell.row.original._id ?
													<IconButton disabled={userId !== cell.row.original.user_id} className={classes.button}
																			onClick={() => editTableItemHandler(cell.row.original)}>
														<EditIcon className={classes.icon}
																			color={userId !== cell.row.original.user_id ? 'disabled' : 'primary'}/>
													</IconButton>
													:
													<IconButton className={classes.button} onClick={() => setId('')}>
														<CloseIcon className={classes.icon} color={'primary'}/>
													</IconButton>
											}
											<IconButton disabled={userId !== cell.row.original.user_id} className={classes.button}
																	onClick={() => deleteTableItemHandler(cell.row.original._id)}>
												<DeleteSweepIcon color={userId !== cell.row.original.user_id ? 'disabled' : 'secondary'}/>
											</IconButton>
											<NavLink to={'/cards'}>
												<IconButton color={"primary"} className={classes.button}
																		onClick={() => getPackIdHandler(cell.row.original._id)}>
													<OpenInNewIcon/>
												</IconButton>
											</NavLink>
											{
												id === cell.row.original._id ?
													<input className={classes.input} type="text" onKeyPress={onkeypressHandler}
																 onChange={onChangeHandler} onBlur={onBlurHandler}
																 value={inputTableValue} autoFocus/> : cell.render('Cell')
											}
										</td>
									)
								}
								return (
									<td {...cell.getCellProps()}>
										{
											cell.render('Cell')}
									</td>
								)
							})}
					</tr>
				)
			})}
			</tbody>
		</table>
	)
})