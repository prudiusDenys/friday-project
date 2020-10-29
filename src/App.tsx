import React from 'react';
import './App.css';
import {HashRouter, Route} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./BLL/store";
import {RegistrationForm} from "./UI/components/RegistrationForm/RegistrationForm";
import {Profile} from "./UI/components/Profile/Profile";
import {Login} from "./UI/components/login/Login";
import {RecoveryPassword} from "./UI/components/RecoveryPassword/RecoveryPassword";
import { ForgotPassword } from './UI/components/ForgotPassword/FogotPassword';

const App = () => {
	return (
		<HashRouter>
			<Provider store={store}>
				<div className="App">
					<Route exact path={'/'} render={() => <Profile/>}/>
					<Route path={'/registration'} render={() => <RegistrationForm/>}/>
					<Route path={'/login'} render={() => <Login/>}/>
					<Route path={'/forgotPassword'} render={() => <ForgotPassword/>}/>
					<Route path={'/recovery/:userId'} render={() => <RecoveryPassword/>}/>
				</div>
			</Provider>
		</HashRouter>
	);
}

export default App;
