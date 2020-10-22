import React from "react";
import classes from "./Profile.module.scss";
import {Title} from "../../common/components-common/Title/Title";


export const Profile = () => {
	return (
		<div className={classes.profile}>
				<Title title={'Welcome to Profile page'}/>
		</div>
	)
}