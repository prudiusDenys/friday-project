import React from 'react';
import './App.css';
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./BLL/store";

const App = () => {
	return (
		<HashRouter>
			<Provider store={store}>
				<div className="App">

				</div>
			</Provider>
		</HashRouter>
	);
}

export default App;
