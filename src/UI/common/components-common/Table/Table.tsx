import React from "react";
import classes from "./Table.module.scss";
import {useTable} from "react-table";
import EditIcon from '@material-ui/icons/Edit';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';


type PropsType = {
	data: Array<any>
	columns: Array<any>
}

export const Table = React.memo((props: PropsType) => {

	const data = props.data
	const columns = props.columns

	const tableInstance = useTable<any>({columns, data})

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
	} = tableInstance

	const editTableItem = (id: string) => {
		console.log(id)
	}
	const deleteTableItem = (id: string) => {
		console.log(id)
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
											<EditIcon className={classes.icon}
																onClick={() => editTableItem(cell.row.original._id)}/>
											<HighlightOffIcon className={classes.icon} style={{color: '#f50057'}}
																				onClick={() => deleteTableItem(cell.row.original._id)}/>
											{
												cell.render('Cell')}
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