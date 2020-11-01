import React from "react";
import classes from './ForgotPassword.module.scss';
import {Button, createStyles, FormControl, FormGroup, Grid, Paper, TextField, Theme} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {useFormik} from "formik";
import {Title} from "../../common/components-common/Title/Title";
import {useDispatch, useSelector} from "react-redux";
import {rootReducers} from "../../../BLL/store";
import {Loading} from "../../common/components-common/Loading/Loading";
import {SnackbarError} from "../../common/components-common/SnackbarError/SnackbarError";
import {NavLink, Redirect} from "react-router-dom";
import {forgotPasswordTC} from "../../../BLL/reducers/forgotPassword-reducer";
import {SimplePopover} from "../../common/components-common/SimplePopover/SimplePopover";


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
	email?: string
}

export type UserDataType = {
	email: string
}

export const ForgotPassword = React.memo(() => {

	const styles = useStyles();
	const dispatch = useDispatch();
	const loading = useSelector<rootReducers, boolean>(state => state.profile.loading)
	const isSignIn = useSelector<rootReducers, boolean>(state => state.login.isSignIn)
	const isSuccessfulMessage = useSelector<rootReducers, boolean>(state => state.app.isSuccessfulMessage)

	const formik = useFormik({
		initialValues: {
			email: ''
		},
		validate: (values: UserDataType) => {
			const errors: FormikErrorType = {};
			if (!values.email) {
				errors.email = 'This field is required';
			} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
				errors.email = 'Invalid email address';
			}

			return errors
		},
		onSubmit: (values, {resetForm}) => {
			dispatch(forgotPasswordTC(values.email))
			resetForm()
		},
	});

	if (isSignIn) return <Redirect to={'/'}/>

	return (
		<div className={classes.forgotPassword}>
			{loading && <Loading/>}
			<Title title={'Forgot Password Form'}/>
			<Grid container justify={"center"} alignItems={'center'} className={styles.container}>
				<Grid item className={styles.grid}>
					<Paper elevation={3} style={{padding: '30px'}}>
						<form className={classes.form} onSubmit={formik.handleSubmit}>
							<FormControl className={styles.formControl}>
								<FormGroup className={styles.formGroup}>
									<div className={classes.inputBox}>
										<TextField className={styles.textField}
															 label="Write your email"
															 variant="outlined"
															 error={formik.errors.email ? true : undefined}
															 {...formik.getFieldProps('email')}
										/>
										{formik.errors.email && <div className={classes.error}>{formik.errors.email}</div>}
									</div>
									<Button type={'submit'} disabled={!(formik.isValid && formik.dirty)} variant={"contained"}
													color={'primary'} className={styles.button}>Send</Button>
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
			{isSuccessfulMessage && <SimplePopover/>}
		</div>
	)
})