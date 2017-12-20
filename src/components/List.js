import React from "react";

const List = props => {
  let arrayResults = props.results.map(result => (
    <li key={result.numeroRestituicao}>
    Nome: {result.nome}; valor: R$ {result.valor},00; data: {result.data}; fonecedor: {result.fornecedor}.
    </li>
  ));
  return <ul>{arrayResults}</ul>;
};

export default List;
