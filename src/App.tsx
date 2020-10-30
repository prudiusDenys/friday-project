import React, {useEffect} from 'react';
import './App.css';
import {HashRouter, Route} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {rootReducers} from "./BLL/store";
import {RegistrationForm} from "./UI/components/RegistrationForm/RegistrationForm";
import {Profile} from "./UI/components/Profile/Profile";
import {Login} from "./UI/components/Login/Login";
import {RecoveryPassword} from "./UI/components/RecoveryPassword/RecoveryPassword";
import {ForgotPassword} from './UI/components/ForgotPassword/FogotPassword';
import {initializeAppTC} from "./BLL/reducers/app-reducer";
import {CircleLoading} from "./UI/common/components-common/Loading/CircleLoading";

const App = () => {

	const dispatch = useDispatch()
	const isInitialized = useSelector<rootReducers, boolean>(state => state.app.isInitialized)

	// initialize our whole app (sending query to the server if we logged in or not)
	useEffect(() => {
		dispatch(initializeAppTC())
	}, [dispatch])

	if (!isInitialized) return <CircleLoading/>

	return (
		<HashRouter>
				<div className="App">
					<Route exact path={'/'} render={() => <Profile/>}/>
					<Route path={'/registration'} render={() => <RegistrationForm/>}/>
					<Route path={'/Login'} render={() => <Login/>}/>
					<Route path={'/forgotPassword'} render={() => <ForgotPassword/>}/>
					<Route path={'/recovery/:userId'} render={() => <RecoveryPassword/>}/>
				</div>
		</HashRouter>
	);
}

export default App;
