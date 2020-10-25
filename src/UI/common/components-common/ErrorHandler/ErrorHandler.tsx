import React from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert, {AlertProps} from '@material-ui/lab/Alert'
import {useDispatch} from 'react-redux'

function Alert(props: AlertProps) {
	return <MuiAlert elevation={6} variant="filled" {...props} />
}

type PropsType = {
	error: string | null
	actionCreator:(value:any)=> any
}

export const ErrorHandler = (props: PropsType)=> {
	const dispatch = useDispatch()

	const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
		if (reason === 'clickaway') {
			return
		}
		dispatch(props.actionCreator(''));
	}


	const isOpen = props.error !== '' || props.error !== null;

	return (
		<Snackbar open={isOpen} autoHideDuration={6000} onClose={handleClose}>
			<Alert onClose={handleClose} severity="error">
				{props.error}
			</Alert>
		</Snackbar>
	)
}