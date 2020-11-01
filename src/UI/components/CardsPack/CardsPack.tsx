import React, {useEffect, useMemo} from "react";
import classes from "./CardsPack.module.scss";
import {useTable} from "react-table";
import {useDispatch, useSelector} from "react-redux";
import {rootReducers} from "../../../BLL/store";
import {getCardsPackTC} from "../../../BLL/reducers/cardsPack-reducer";
import {ICardsPacks} from "../../../DAL/api/cardsAPI";

export const CardsPack = React.memo(() => {

	const userId = useSelector<rootReducers, string>(state => state.login._id)
	const cardsPack = useSelector<rootReducers, Array<ICardsPacks>>(state => state.cardsPack)
	const dispatch = useDispatch()
	debugger

	useEffect(() => {
		// do query to the server to get all packs of cards (userID to get only private packs)
			dispatch(getCardsPackTC(userId))
	}, [userId, dispatch])


	const data = useMemo(() => cardsPack, [cardsPack])

	const columns = useMemo(() => [
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
	], [])

	const tableInstance = useTable<any>({columns, data})

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
	} = tableInstance

	return (
		<table {...getTableProps()} className={classes.table}>
			<thead>
			{
				headerGroups.map(headerGroup => (
					<tr {...headerGroup.getHeaderGroupProps()}>
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
			{rows.map(row => {
				prepareRow(row)
				return (
					<tr {...row.getRowProps()}>
						{
							row.cells.map(cell => {
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