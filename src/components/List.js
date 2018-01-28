import React from 'react';
import { RotateSpinLoader } from 'react-css-loaders';


const List = props => {
	console.log(props);
	if (props.loading) {
		return <RotateSpinLoader />
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


RotateSpinLoader.defaultProps = {
	color: '#f4e542',
	duration: 1.1,
	size: 10
};

export default List;
