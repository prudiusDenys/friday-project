import React, {useCallback} from "react";
import classes from "./Profile.module.scss";
import {Title} from "../../common/components-common/Title/Title";
import {NavLink, Redirect} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {rootReducers} from "../../../BLL/store";
import {Button} from "@material-ui/core";
import {logoutTC} from "../../../BLL/reducers/login-reducer";
import containerStyle from '../../common/css/styles/container.module.scss';
import privatePhoto from '../../assets/images/private.jpeg'
import publicPhoto from '../../assets/images/publicItem.jpeg'

export const Profile = React.memo(() => {

	const isSignIn = useSelector<rootReducers, boolean>(state => state.login.isSignIn)
	const dispatch = useDispatch()

	debugger

	const logOutHandler = useCallback(() => {
		dispatch(logoutTC())
	}, [dispatch])

	if (!isSignIn) return <Redirect to={'/Login'}/>

	return (
		<div className={classes.profile}>
			<Title title={'Welcome to Profile page'}/>
			<div className={containerStyle.container}>
				<div className={classes.profileContent}>
					<div className={classes.btn}>
						{isSignIn && <Button variant="contained" color={"secondary"} onClick={logOutHandler}>Log out</Button>}
					</div>
					<div className={classes.modules}>
						<div className={classes.module}>
							<img src={publicPhoto} alt=""/>
							<NavLink to="/allModules"><h2>Show all modules</h2></NavLink>
						</div>
						<div className={classes.module}>
							<img src={privatePhoto} alt=""/>
							<NavLink to="/myModules"><h2>Show only my modules</h2></NavLink>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
})

