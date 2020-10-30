import React, {useCallback} from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import {useDispatch, useSelector} from "react-redux";
import {setSuccessfulMessage} from "../../../../BLL/reducers/app-reducer";
import {rootReducers} from "../../../../BLL/store";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		typography: {
			padding: theme.spacing(6),
		},
	}),
);

export const SimplePopover = React.memo(() => {
	const classes = useStyles();

	const dispatch = useDispatch()
	const isSuccessfulMessage = useSelector<rootReducers, boolean>(state => state.app.isSuccessfulMessage)

	const handleClose = useCallback(() => {
		dispatch(setSuccessfulMessage(false))
	}, [dispatch])

	return (
		<div>
			<Popover
				open={isSuccessfulMessage}
				onClose={handleClose}
				anchorOrigin={{vertical: 'center', horizontal: 'center',}}
				transformOrigin={{vertical: 'center', horizontal: 'center',}}>
				<Typography style={{backgroundColor: '#3f51b5', color: '#fff'}} className={classes.typography}>Email was sent to
					your address</Typography>
			</Popover>
		</div>
	);
})