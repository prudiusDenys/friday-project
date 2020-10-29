import React from "react";
import classes from './RecoveryPassword.module.scss';
import {Button, createStyles, FormControl, FormGroup, Grid, Paper, TextField, Theme} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {useFormik} from "formik";
import {Title} from "../../common/components-common/Title/Title";
import {useDispatch, useSelector} from "react-redux";
import {rootReducers} from "../../../BLL/store";
import {Loading} from "../../common/components-common/Loading/Loading";
import {SnackbarError} from "../../common/components-common/SnackbarError/SnackbarError";
import {Redirect, useParams} from "react-router-dom";
import {recoveryPasswordTC} from "../../../BLL/reducers/recoveryPassword-reducer";


const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		grid: {
			maxWidth: '400px',
			width: '100%',
			margin: '0 30px'
		},
		formControl: {
			width: '100%'
		},
		container: {
			height: '100vh',
		},
		formGroup: {
			alignItems: 'center'
		},
		textField: {
			width: '100%',
			paddingBottom: '30px',
		},
		button: {
			width: '100%',
			marginBottom: '15px',
		},
		registration: {
			textAlign: 'center',
		},
	}),
);

type FormikErrorType = {
	password?: string
	confirmPassword?: string
}

export type UserDataType = {
	password: string
	confirmPassword: string
}

export const RecoveryPassword = () => {

	const styles = useStyles();
	const dispatch = useDispatch();
	const loading = useSelector<rootReducers, boolean>(state => state.profile.loading)
	const passwordIsUpdated = useSelector<rootReducers, boolean>(state => state.recoveryPassword.passwordIsUpdated)

	// get userId from URl
	const {userId} = useParams()

	const formik = useFormik({
		initialValues: {
			password: '',
			confirmPassword: '',
		},
		validate: (values: UserDataType) => {
			const errors: FormikErrorType = {};
			if (!values.password) {
				errors.password = 'This field is required';
			} else if (values.password.length < 8) {
				errors.password = 'Password length should be at least 8 characters';
			} else if (values.confirmPassword !== values.password) {
				errors.confirmPassword = 'Passwords must match'
			}
			return errors
		},
		onSubmit: (values,{resetForm}) => {
			dispatch(recoveryPasswordTC(values.password, userId))
			resetForm()
		},
	});

	if (passwordIsUpdated) {
		return <Redirect to={'/login'}/>
	}

	return (
		<div className={classes.recoveryPassword}>
			{loading && <Loading/>}
			<Title title={'Recovery Password Form'}/>
			<Grid container justify={"center"} alignItems={'center'} className={styles.container}>
				<Grid item className={styles.grid}>
					<Paper elevation={3} style={{padding: '30px'}}>
						<form className={classes.form} onSubmit={formik.handleSubmit}>
							<FormControl className={styles.formControl}>
								<FormGroup className={styles.formGroup}>

									<div className={classes.inputBox}>
										<TextField className={styles.textField}
															 type={'password'}
															 label="New password"
															 variant="outlined"
															 error={formik.errors.password ? true : undefined}
															 {...formik.getFieldProps('password')}
										/>
										{formik.errors.password && <div className={classes.error}>{formik.errors.password}</div>}
									</div>

									<div className={classes.inputBox}>
										<TextField className={styles.textField}
															 type={'password'}
															 label="Confirm password"
															 variant="outlined"
															 error={formik.errors.confirmPassword ? true : undefined}
															 {...formik.getFieldProps('confirmPassword')}
										/>
										{formik.errors.confirmPassword &&
                    <div className={classes.error}>{formik.errors.confirmPassword}</div>}
									</div>

									<Button type={'submit'}
													disabled={!(formik.isValid && formik.dirty)}
													variant={"contained"}
													color={'primary'}
													className={styles.button}>Save password
									</Button>
								</FormGroup>
							</FormControl>
						</form>
					</Paper>
				</Grid>
			</Grid>
			<SnackbarError/>
		</div>
	)
}