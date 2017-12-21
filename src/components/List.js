import React from 'react';

const List = props => {
	console.log(props);
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
