import React, {useCallback} from "react";
import classes from "./Profile.module.scss";
import {Title} from "../../common/components-common/Title/Title";
import {Redirect} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {rootReducers} from "../../../BLL/store";
import {Button} from "@material-ui/core";
import {logoutTC} from "../../../BLL/reducers/login-reducer";
import containerStyle from '../../common/css/styles/container.module.scss';
import {CardsPack} from "../CardsPack/CardsPack";

export const Profile = React.memo(() => {

	const isSignIn = useSelector<rootReducers, boolean>(state => state.login.isSignIn)
	const dispatch = useDispatch()

	const logOutHandler = useCallback(() => {
		dispatch(logoutTC())
	},[dispatch])

	if (!isSignIn) return <Redirect to={'/Login'}/>

	return (
		<div className={classes.profile}>
			<div className={containerStyle.container}>
				<div className={classes.profileContent}>
					<Title title={'Welcome to Profile page'}/>
					<div className={classes.btn}>
						{isSignIn  && <Button variant="contained" color={"secondary"} onClick={logOutHandler}>Log out</Button>}
					</div>
					<CardsPack/>
				</div>
			</div>
		</div>
	)
})

