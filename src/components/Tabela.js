import React, { useState } from 'react';

const Tabela = ({ categoria, dados }) => {
  const [itens, setItens] = useState(dados);

  const atualizarQuantidade = (index, novaQuantidade) => {
    const novosItens = [...itens];
    novosItens[index].quantidade = novaQuantidade;
    setItens(novosItens);
  };

  const atualizarTexto = (index, novoTexto) => {
    const novosItens = [...itens];
    novosItens[index].texto = novoTexto;
    setItens(novosItens);
  };

  const calcularSubtotal = () => {
    return itens.reduce((total, item) => total + item.quantidade * item.valorUnitario, 0);
  };

  return (
    <div>
      <h2>{categoria}</h2>
      <table>
        <thead>
          <tr>
            <th>Texto</th>
            <th>Quantidade</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {itens.map((item, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  value={item.texto}
                  onChange={(e) => atualizarTexto(index, e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={item.quantidade}
                  onChange={(e) => atualizarQuantidade(index, e.target.value)}
                />
              </td>
              <td>{item.quantidade * item.valorUnitario}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Total: {calcularSubtotal()}</p>
    </div>
  );
};

export default Tabela;
