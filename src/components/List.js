import React from 'react';
import { RotateSpinLoader } from 'react-css-loaders';


const List = props => {
	if (props.loading) {
		return <RotateSpinLoader />
	}
	if (props.results === null) {
		return <h3> Não há dados para essa requisição</h3>;
	}

	let arrayResults = props.results.map(result => (
		<li key={result.numeroRestituicao}>
			Nome: {result.nome}; valor: R$ {result.valor}; data: {result.data}; fonecedor: {result.fornecedor}.
		</li>
	));
	return <ul>{arrayResults}</ul>;
};


RotateSpinLoader.defaultProps = {
	color: '#4e77d8',
	duration: 1.1,
	size: 10
};

export default List;
