import React, { Component } from 'react';
import '../App.css';
import Form from './Form';

class App extends Component {
	render() {
		return (
			<div className="App">
				<div class="container-fluid">
					<div class="row">
						<div className="col-xs-12">
							<header className="App-header">
								<h1 className="App-title">Cota Parlamentar API</h1>
							</header>
						</div>
					</div>
					<div className="row">
						<div className="Instructions">
							<h3 className="Instructions-text">
								Esta API é um projeto bastante simples. Trata-se uma aplicação que filtra registros
								contidos nos arquivos .csv referentes às despesas de deputados obtidos no site da{' '}
								<a href="http://www2.camara.leg.br/transparencia/cota-para-exercicio-da-atividade-parlamentar/dados-abertos-cota-parlamentar">
									{' '}
									Câmara dos Deputados
								</a>. A resposta é um array de objetos em formato JSON.
							</h3>
							<h3 className="Instructions-text">Para usar esta API basta fazer uma requisição GET com os seguintes parâmetros: <i>/:ano/:nome_do_deputado/:tipo de despesa </i></h3>
							<h3 className="Instructions-text"><b>Exemplo de requisição:</b> https://cota-parlamentar.herokuapp.com/2016/ALFREDO NASCIMENTO/COMBUSTÍVEIS E LUBRIFICANTES. <i> (incluir o ponto)</i></h3>

							<h3 className="Instructions-text"><b>Exemplo de resposta:</b> <h4 className="Example-response">[
							{`{`}
								"nome": "ALFREDO NASCIMENTO",
							"numeroCarteiraDeputado": "36",
							"estado": "AM",
							"partido": "PR",
							"tipoDespesa": "COMBUSTÍVEIS E LUBRIFICANTES.",
							"desricaoEspecifica": "Veículos Automotores",
							"fornecedor": "AUTO POSTO QUALITY",
							"cnpjFornecedor": "14897109000188",
							"data": "2016-11-10 00:00:00",
							"valor": "260",
							"numeroRestituicao": "5619"
						},
					{`}`}
								"nome": "ALFREDO NASCIMENTO",
							"numeroCarteiraDeputado": "36",
							"estado": "AM",
							"partido": "PR",
							"tipoDespesa": "COMBUSTÍVEIS E LUBRIFICANTES.",
							"desricaoEspecifica": "Veículos Automotores",
							"fornecedor": "AUTO POSTO QUALITY",
							"cnpjFornecedor": "14897109000188",
							"data": "2016-11-18 00:00:00",
							"valor": "260",
							"numeroRestituicao": "5619"
						},
					{`}`}
								"nome": "ALFREDO NASCIMENTO",
							"numeroCarteiraDeputado": "36",
							"estado": "AM",
							"partido": "PR",
							"tipoDespesa": "COMBUSTÍVEIS E LUBRIFICANTES.",
							"desricaoEspecifica": "Veículos Automotores",
							"fornecedor": "AUTO POSTO QUALITY",
							"cnpjFornecedor": "14897109000188",
							"data": "2016-12-01 00:00:00",
							"valor": "220",
							"numeroRestituicao": "5624"
						}, (...)]</h4></h3>



							<h3 className="Instructions-text"> É necessário usar os nomes de deputados e tipos de despesa exatamente como aparecem na lista abaixo, bastando tirar a sigla do partido e Estado.</h3>
						</div>
					</div>
					<div className="App-body">
						<div>
							<Form />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
