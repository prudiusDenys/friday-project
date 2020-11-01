import React from "react";
import classes from './RegistrationForm.module.scss';
import {Button, createStyles, FormControl, FormGroup, Grid, Paper, TextField, Theme} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {useFormik} from "formik";
import {Title} from "../../common/components-common/Title/Title";
import {useDispatch, useSelector} from "react-redux";
import {rootReducers} from "../../../BLL/store";
import {Loading} from "../../common/components-common/Loading/Loading";
import {NavLink, Redirect,} from "react-router-dom";
import {userRegisterTC} from "../../../BLL/reducers/registration-reducer";
import {SnackbarError} from "../../common/components-common/SnackbarError/SnackbarError";


const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		grid: {
			maxWidth: '600px',
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
	email?: string
	password?: string
}

export type UserDataType = {
	email: string
	password: string
}

export const RegistrationForm = React.memo(() => {

	const styles = useStyles();
	const dispatch = useDispatch();
	const loading = useSelector<rootReducers, boolean>(state => state.profile.loading)
	const isRegistered = useSelector<rootReducers, boolean>(state => state.registration.isRegistered)
	const isSignIn = useSelector<rootReducers, boolean>(state => state.login.isSignIn)

	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		validate: (values: UserDataType) => {
			const errors: FormikErrorType = {};
			if (!values.email) {
				errors.email = 'This field is required';
			} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
				errors.email = 'Invalid email address';
			} else if (!values.password) {
				errors.password = 'This field is required';
			} else if (values.password.length < 8) {
				errors.password = 'Password length should be at least 8 characters';
			}
			return errors
		},
		onSubmit: (values, {resetForm}) => {
			dispatch(userRegisterTC(values))
			resetForm();
		},
	});

	if (isRegistered) {
		return <Redirect to={'/Login'}/>
	}
	if (isSignIn) {
		return <Redirect to={'/'}/>
	}

	return (
		<div className={classes.registrationForm}>
			{loading && <Loading/>}
			<Title title={'Registration Form'}/>
			<Grid container justify={"center"} alignItems={'center'} className={styles.container}>
				<Grid item className={styles.grid}>
					<Paper elevation={3} style={{padding: '30px'}}>
						<div className={styles.registration}>
							<h2 style={{margin: '0 0 30px 0', color: '#666'}}>Please fill in all fields</h2>
						</div>
						<form className={classes.form} onSubmit={formik.handleSubmit}>
							<FormControl className={styles.formControl}>
								<FormGroup className={styles.formGroup}>
									<div className={classes.inputBox}>
										<TextField className={styles.textField}
															 label="Email"
															 variant="outlined"
															 error={formik.errors.email ? true : undefined}
															 {...formik.getFieldProps('email')}
										/>
										{formik.errors.email && <div className={classes.error}>{formik.errors.email}</div>}
									</div>
									<div className={classes.inputBox}>
										<TextField className={styles.textField}
															 type={'password'}
															 label="Password"
															 variant="outlined"
															 error={formik.errors.password ? true : undefined}
															 {...formik.getFieldProps('password')}
										/>
										{formik.errors.password && <div className={classes.error}>{formik.errors.password}</div>}
									</div>
									<Button type={'submit'} disabled={!(formik.isValid && formik.dirty)} variant={"contained"}
													color={'primary'} className={styles.button}>Sign
										up</Button>
									<NavLink to={'/Login'} style={{textDecoration: 'none', width: '100%'}}>
										<Button style={{width: '100%'}} color={'secondary'} variant={"contained"}>Login</Button>
									</NavLink>
								</FormGroup>
							</FormControl>
						</form>
					</Paper>
				</Grid>
			</Grid>
			<SnackbarError/>
		</div>
	)
})