import React from "react";
import classes from "./Table.module.scss";
import {useTable} from "react-table";


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