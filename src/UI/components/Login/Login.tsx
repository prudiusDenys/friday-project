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

export const Login = React.memo(()=> {

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
			errMessage: {
				color: '#d82626'
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
		validate: values => {
			if (!values.email) return {email: 'Email is required!'}
			if (!values.password) return {password: 'Password is required!'}
			if (values.password.length <= 6) return {password: 'Password should be more than 5 symbols'}
		},
		onSubmit: values => {
			dispatch(loginTC(values))
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
						{/*Hook useFormik gives handleSubmit function to take all form's values*/}
						<form onSubmit={formik.handleSubmit}>
							<FormControl className={styles.formControl}>
								<FormGroup>
									<TextField type={'email'} label={'Email'} margin={'normal'}
										// Get all props from email
														 {...formik.getFieldProps('email')}
									/>
									{/*Get an error message if email is not valid*/}
									{formik.errors.email && <div className={styles.errMessage}>{formik.errors.email}</div>}
									<TextField type={'password'} label={'Password'} margin={'normal'}
														 {...formik.getFieldProps('password')}
									/>
									{formik.errors.password && <div className={styles.errMessage}>{formik.errors.password}</div>}
									<FormControlLabel className={styles.formLabel} label={'Remember me'}
																		control={
																			// Get all props from checkbox
																			// checked value must be taken from formik
																			<Checkbox color={'primary'} checked={formik.values.rememberMe}
																								{...formik.getFieldProps('rememberMe')}
																			/>
																		}
									/>
									<NavLink to={'/forgotPassword'} style={{marginBottom: '10px', color: '#3f51b5'}}>Forgot Password?</NavLink>
									<Button className={styles.button} type={'submit'} variant={'contained'} color={'primary'}>Sign
										In</Button>
									<NavLink to={'/registration'}>
										<Button className={styles.signUp} variant={'contained'} color={'secondary'}>Sign Up</Button>
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
