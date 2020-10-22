import React from "react";
import classes from "./Title.module.scss";

type PropsType = {
	title: string
}

export const Title = ({title} : PropsType) => {
	return (
		<div className={classes.title}>
			<h1>{title}</h1>
		</div>
	)
}