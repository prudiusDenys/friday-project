import React from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert, {AlertProps} from '@material-ui/lab/Alert'
import {useDispatch, useSelector} from 'react-redux'
import {rootReducers} from "../../../../BLL/store";
import {setAppErrorMessage, setAppStatusMessage, StatusType} from "../../../../BLL/reducers/app-reducer";

function Alert(props: AlertProps) {
	return <MuiAlert elevation={6} variant="filled" {...props} />
}

export const SnackbarStatus = () => {
	const error = useSelector<rootReducers, string | null>(state => state.app.errorMessage);
	const statusMessage = useSelector<rootReducers, string | null>(state => state.app.snackbarStatus.snackbarMessage);
	const severityStatus = useSelector<rootReducers, StatusType>(state => state.app.snackbarStatus.status);
	const dispatch = useDispatch()

	const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
		if (reason === 'clickaway') {
			return
		}
		dispatch(setAppErrorMessage(null, undefined));
		dispatch(setAppStatusMessage(null, undefined));
	}


	const isOpen = error !== null || statusMessage !== null;

	return (
		<Snackbar open={isOpen} autoHideDuration={3000} onClose={handleClose}>
			<Alert onClose={handleClose} severity={severityStatus}>
				{error || statusMessage}
			</Alert>
		</Snackbar>
	)
}
