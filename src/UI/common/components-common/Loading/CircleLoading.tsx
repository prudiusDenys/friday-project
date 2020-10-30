import React from "react";
import {CircularProgress} from "@material-ui/core";


const progressStyle = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%,-50%)'
} as const

export const CircleLoading = React.memo(() => {
	return (
		<div style={progressStyle}>
			<CircularProgress/>
		</div>
	)
})