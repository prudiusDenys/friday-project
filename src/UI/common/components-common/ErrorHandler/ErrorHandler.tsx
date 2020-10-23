import React from "react";
import Alert, {AlertProps} from '@material-ui/lab/Alert';
import {Snackbar} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {rootReducers} from "../../../../BLL/store";


// function Alert(props: AlertProps) {
// 	return <MuiAlert elevation={6} variant="filled" {...props} />
// }

export const ErrorHandler = () => {
	const error = useSelector<rootReducers, string>(state => state.registration.error);
	const dispatch = useDispatch()

	const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
		if (reason === 'clickaway') {
			return
		}
		// dispatch(setAppErrorAC(null));
	}


	const isOpen = error !== null;

	return (
		<Snackbar open={isOpen} autoHideDuration={6000} onClose={handleClose}>
			<Alert onClose={handleClose} severity="error">
				{error}
			</Alert>
		</Snackbar>
	)
}
