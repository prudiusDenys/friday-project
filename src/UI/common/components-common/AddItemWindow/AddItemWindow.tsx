import React, {ChangeEvent} from "react";
import classes from "./AddItemWindow.module.scss";
import {Button, Checkbox, createStyles, FormControlLabel, Paper, TextField, Theme} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {useDispatch, useSelector} from "react-redux";
import {addCardsPackTC, getNewCardsPackNameAC} from "../../../../BLL/reducers/cardsReducer/cardsPack-reducer";
import {rootReducers} from "../../../../BLL/store";

type PropsType = {
	title: string
	checkboxLabel: string
	setAddItemMode: (value: boolean) => void
}

export type NewCardsPackType = {
	name: string
	private: boolean,
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		textField: {
			width: '100%',
			marginBottom: '15px'
		},
		checkBox: {
			marginBottom: '30px'
		},
		button: {
			width: '100%',
			margin: '0 15px'
		}

	}),
)

export const AddItemWindow = (props: PropsType) => {

	const styles = useStyles()
	const newCardsPackName = useSelector<rootReducers, string>(state => state.cardsPack.newCardsPack.name)
	const dispatch = useDispatch()

	const [checked, setChecked] = React.useState(false);
	const [error, setError] = React.useState(false);

	const newCardsPack: NewCardsPackType = {
		name: newCardsPackName,
		private: checked
	}

	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setError(false)
		dispatch(getNewCardsPackNameAC(e.currentTarget.value))
	}
	const saveNewCardsPackHandler = () => {

		if (!newCardsPackName) {
			setError(true)
		} else {
			dispatch(addCardsPackTC(newCardsPack))
			props.setAddItemMode(false)
		}
	}
	const closeAddItemWindowHandler = () => props.setAddItemMode(false)
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setChecked(event.target.checked);
	};

	return (
		<div className={classes.addItem}>
			<Paper elevation={3} style={{padding: '30px'}}>
				<h2>{props.title}</h2>
				<TextField className={styles.textField} onChange={onChangeHandler} id="standard-basic" label={props.title}
									 variant={'outlined'} error={error}
									 helperText={error && <span className={classes.errorSpan}>'please enter a value'</span>} autoFocus/>
				<FormControlLabel className={styles.checkBox}
													control={
														<Checkbox
															checked={checked}
															onChange={handleChange}
															name="checkedB"
															color="secondary"
														/>
													}
													label={props.checkboxLabel}
				/>
				<div className={classes.btn}>
					<Button onClick={saveNewCardsPackHandler} className={styles.button} variant={"contained"}
									color={'primary'}>Save</Button>
					<Button className={styles.button} variant={"contained"} color={'secondary'}
									onClick={closeAddItemWindowHandler}>Close</Button>
				</div>
			</Paper>
		</div>
	)
}