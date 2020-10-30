import React from "react";
import {
	Button,
	Checkbox,
	createStyles,
	FormControl,
	FormControlLabel,
	FormGroup,
	Grid, Paper,
	TextField,
	Theme
} from "@material-ui/core";
import {useFormik} from "formik";
import {makeStyles} from "@material-ui/core/styles";
import {useDispatch, useSelector} from "react-redux";
import {loginTC} from "../../../BLL/reducers/login-reducer";
import {NavLink, Redirect} from "react-router-dom";
import {rootReducers} from "../../../BLL/store";
import {Spinner} from "../../common/components-common/spinner/Spinner";
import {Title} from "../../common/components-common/Title/Title";


type LoginDataType = {
	email: string,
	password: string,
	rememberMe: boolean
}

type LoginErrorType = {
	email?: string,
	password?: string,
	rememberMe?: boolean
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		gridItem: {
			position: 'relative',
			zIndex: 1,
			maxWidth: '400px',
			width: '100%',
			padding: '0 10px'
		},
		formControl: {
			width: '100%'
		},
		container: {
			height: '100vh',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center'
		},
		formLabel: {
			margin: '10px 0 10px 0'
		},
		inputBox: {
			position: 'relative',
			width: '100%'
		},
		errMessage: {
			position: 'absolute',
			bottom: '-16px',
			left: '0',
			color: '#d82626',

		},
		button: {
			margin: '0 0 10px 0'
		},
		signUp: {
			width: '100%'
		},
		disable: {
			opacity: 0.5,
			pointerEvents: 'none'
		},
		enable: {
			opacity: 1,
			pointerEvents: 'inherit'
		}
	}),
)

export const Login = React.memo(() => {

	const styles = useStyles()
	const dispatch = useDispatch()
	const isSignIn = useSelector<rootReducers, boolean>(state => state.login.isSignIn)
	const success = useSelector<rootReducers, boolean>(state => state.app.success)

	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
			rememberMe: false
		},
		validate: (values: LoginDataType) => {
			const errors: LoginErrorType = {};
			if (!values.email) {
				errors.email = 'This field is required';
			} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
				errors.email = 'Invalid email address';
			} else if (!values.password) {
				errors.password = 'This field is required';
			} else if (values.password.length < 8) {
				errors.password = 'Password should be at least 8 characters';
			}
			return errors
		},
		onSubmit: (values, {resetForm}) => {
			dispatch(loginTC(values))
			resetForm();
		},
	})

	if (isSignIn) return <Redirect to={'/'}/>

	return (
		<div>
			<Title title={'Login Form'}/>
			<Grid container className={styles.container}>
				<Grid item className={`${styles.gridItem} ${success ? styles.enable : styles.disable}`}>
					{!success && <Spinner/>}
					<Paper elevation={3} style={{padding: '30px'}}>
						<form onSubmit={formik.handleSubmit}>
							<FormControl className={styles.formControl}>
								<FormGroup>
									<div className={styles.inputBox}>
										<TextField style={{width: '100%'}}
															 type={'email'}
															 label={'Email'}
															 margin={'normal'}
															 error={formik.errors.email ? true : undefined}
															 {...formik.getFieldProps('email')}/>
										{formik.errors.email && <div className={styles.errMessage}>{formik.errors.email}</div>}
									</div>
									<div className={styles.inputBox}>
										<TextField style={{width: '100%'}}
															 type={'password'}
															 label={'Password'}
															 margin={'normal'}
															 error={formik.errors.password ? true : undefined}
															 {...formik.getFieldProps('password')}/>
										{formik.errors.password && <div className={styles.errMessage}>{formik.errors.password}</div>}
									</div>
									<FormControlLabel className={styles.formLabel} label={'Remember me'}
																		control={
																			// Get all props from checkbox
																			// checked value must be taken from formik
																			<Checkbox color={'primary'}
																								checked={formik.values.rememberMe}
																								{...formik.getFieldProps('rememberMe')}/>
																		}
									/>
									<NavLink to={'/forgotPassword'}
													 style={{marginBottom: '10px', color: '#3f51b5'}}>Forgot Password?
									</NavLink>
									<Button className={styles.button}
													type={'submit'}
													variant={'contained'}
													color={'primary'}>Sign In
									</Button>
									<NavLink to={'/registration'}>
										<Button className={styles.signUp}
														variant={'contained'}
														color={'secondary'}>Sign Up
										</Button>
									</NavLink>
								</FormGroup>
							</FormControl>
						</form>
					</Paper>
				</Grid>
			</Grid>
		</div>
	)
})
