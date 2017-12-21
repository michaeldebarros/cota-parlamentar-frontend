import React, { Component } from 'react';
import '../App.css';
import Form from './Form';

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Cota Parlamentar API</h1>
				</header>
				<div className="App-body">
					<div>
						<Form />
					</div>
				</div>
			</div>
		);
	}
}

export default App;
