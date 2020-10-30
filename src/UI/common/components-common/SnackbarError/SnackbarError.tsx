import React from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert, {AlertProps} from '@material-ui/lab/Alert'
import {useDispatch, useSelector} from 'react-redux'
import {rootReducers} from "../../../../BLL/store";
import {setAppErrorMessage} from "../../../../BLL/reducers/app-reducer";

function Alert(props: AlertProps) {
	return <MuiAlert elevation={6} variant="filled" {...props} />
}

export const SnackbarError  = React.memo(() => {
	const error = useSelector<rootReducers, string | null>(state => state.app.errorMessage);
	const dispatch = useDispatch()

	const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
		if (reason === 'clickaway') {
			return
		}
		dispatch(setAppErrorMessage(null));
	}

	const isOpen = error !== null;

	return (
		<Snackbar open={isOpen} autoHideDuration={3000} onClose={handleClose}>
			<Alert onClose={handleClose} severity={'error'}>
				{error}
			</Alert>
		</Snackbar>
	)
})
