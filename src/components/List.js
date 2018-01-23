import React from 'react';

const List = props => {
	console.log(props);
	if (props.loading) {
		return <h3> Carregando ... (devido à quantidade de dados isso pode demorar um pouco)</h3>
	}
	if (props.results === 'Não há dados para essa requisição.') {
		return <p> Não há dados para essa requisição</p>;
	}
	let arrayResults = props.results.map(result => (
		<li key={result.numeroRestituicao}>
			Nome: {result.nome}; valor: R$ {result.valor},00; data: {result.data}; fonecedor: {result.fornecedor}.
		</li>
	));
	return <ul>{arrayResults}</ul>;
};

export default List;
