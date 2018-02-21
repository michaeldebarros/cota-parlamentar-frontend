import React from 'react';
import { RotateSpinLoader } from 'react-css-loaders';


const List = props => {
	if (props.loading) {
		return <RotateSpinLoader />
	}
	if (props.results === 'Não há dados para essa requisição.') {
		return <p> Não há dados para essa requisição</p>;
	}
	else if (props.results === "server timeout") {
		return <p>Sua requisição está demorando mais do que o esperado, por favor tente novamente. Lamentamos o inconveniente.</p>
	}
	let arrayResults = props.results.map(result => (
		<li key={result.numeroRestituicao}>
			Nome: {result.nome}; valor: R$ {result.valor},00; data: {result.data}; fonecedor: {result.fornecedor}.
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
