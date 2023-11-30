import React from 'react';
import Tabela from './components/Tabela.js';

const App = () => {
  const categorias = ['Categoria 1', 'Categoria 2'];

  const dadosTabela1 = [
    { texto: 'Item 1', quantidade: 1, valorUnitario: 10 },
    { texto: 'Item 2', quantidade: 2, valorUnitario: 20 },
  ];

  const dadosTabela2 = [
    { texto: 'Produto A', quantidade: 3, valorUnitario: 15 },
    { texto: 'Produto B', quantidade: 1, valorUnitario: 30 },
  ];

  return (
    <div>
      {categorias.map((categoria, index) => (
        <Tabela key={index} categoria={categoria} dados={index === 0 ? dadosTabela1 : dadosTabela2} />
      ))}
    </div>
  );
};

export default App;
