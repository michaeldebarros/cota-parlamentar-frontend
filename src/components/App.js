import React, { Component } from 'react';
import '../App.css';
import Form from './Form';

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="container-fluid">
					<div className="row-fluid">
						<div className="col-xs-12">
							<header className="App-header">
								<h1 className="App-title">Cota Parlamentar</h1>
							</header>
						</div>
					</div>
					<div className="row">
						<div className="col-xs-11 Instructions Instructions-example" >
							<h3 className="Instructions-text">
								Estae é um projeto bastante simples. Trata-se uma aplicação que filtra registros
								contidos nos arquivos .csv referentes às despesas de Deputados obtidos no site da{' '}
								<a href="http://www2.camara.leg.br/transparencia/cota-para-exercicio-da-atividade-parlamentar/dados-abertos-cota-parlamentar">
									{' '}
									Câmara dos Deputados
								</a>.
							</h3>
							<h3 className="Instructions-text">Os dados obtidos no site da Câmara dos Deputados estão organizados em ordem alfabética por nome de Deputado.</h3>
							<h3 className="Instructions-text">Assim, quanto mais adiante no alfabeto mais vai demorar o retorno das informações. Para Deputados cujos nomes iniciam com a letra "Z" a requisição pode demorar até 20 segundos.</h3>
							<h3 className="Instructions-text"> Maiores informações podem ser obtidas <a href="https://github.com/michaeldebarros/cota-parlamentar/wiki">aqui</a>.</h3>
							<Form />
						</div>
					</div>
				</div>
			</div >
		);
	}
}

export default App;
