import React from "react";
import {createStyles, LinearProgress, Theme} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		loading:{
			position: 'absolute',
			top: '80px',
			left: '0',
			zIndex: 1,
			width: '100%'
		}
	}),
);

export const Loading = () => {
	const styles = useStyles();
	return <LinearProgress className={styles.loading}/>
}