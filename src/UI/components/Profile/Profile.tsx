import React, {useEffect} from "react";
import classes from "./Profile.module.scss";
import {Title} from "../../common/components-common/Title/Title";
import {Redirect} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {rootReducers} from "../../../BLL/store";
import {Button} from "@material-ui/core";
import {logoutTC} from "../../../BLL/reducers/login-reducer";
import containerStyle from '../../common/css/styles/container.module.scss';
import {initializeAppTC} from "../../../BLL/reducers/app-reducer";
import { CircleLoading } from "../../common/components-common/Loading/CircleLoading";

export const Profile = () => {

	const isSignIn = useSelector<rootReducers, boolean>(state => state.login.isSignIn)
	const isInitialized = useSelector<rootReducers, boolean>(state => state.app.isInitialized)
	const dispatch = useDispatch()

	// initialize our program (if we've logged in 'show profile')
	useEffect(() => {
		dispatch(initializeAppTC())
	}, [dispatch])

	if (!isInitialized) return <CircleLoading/>
	if (!isSignIn) return <Redirect to={'/login'}/>

	const logOutHandler = () => {
		dispatch(logoutTC())
	}

	return (
		<div className={classes.profile}>
			<div className={containerStyle.container}>
				<div className={classes.profileContent}>
					<Title title={'Welcome to Profile page'}/>
					<div className={classes.btn}>
						{isSignIn  && <Button variant="contained" color={"secondary"} onClick={logOutHandler}>Log out</Button>}
					</div>
				</div>
			</div>
		</div>
	)
}