import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState('');
  const [status, setStatus] = useState('');
  const [produtos, setProdutos] = useState([]);

  const apiUrl = 'http://localhost:5016/api/produto';

  const fetchProdutos = async () => {
    try {
      const response = await fetch(apiUrl);
      if (response.ok) {
        const data = await response.json();
        setProdutos(data);
      } else {
        console.error('Erro ao buscar produtos.');
      }
    } catch (error) {
      console.error('Erro de conexão:', error);
    }
  };

  useEffect(() => {
    fetchProdutos();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const novoProduto = {
      nome,
      descricao,
      preco: parseFloat(preco),
    };

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(novoProduto),
      });

      if (response.ok) {
        setNome('');
        setDescricao('');
        setPreco('');
        fetchProdutos();
      } else {
        setStatus('Erro ao cadastrar o produto.');
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
      setStatus('Erro de conexão com o servidor.');
    }
  };

  return (
    <div className="container">
      <h1>Cadastro de Produto</h1>
      <form onSubmit={handleSubmit}>
        {/* Formulário de cadastro */}
        <div>
          <label htmlFor="nome">Nome:</label>
          <input
            id="nome"
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="descricao">Descrição:</label>
          <input
            id="descricao"
            type="text"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="preco">Preço:</label>
          <input
            id="preco"
            type="number"
            step="0.01"
            value={preco}
            onChange={(e) => setPreco(e.target.value)}
            required
          />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
      {status && <p>{status}</p>}

      <h2>Produtos Cadastrados</h2>
      {produtos.length > 0 ? (
        <ul>
          {produtos.map((produto) => (
            <li key={produto.id}>
              <strong>{produto.nome}</strong> - R$ {produto.preco.toFixed(2)}
              <p>{produto.descricao}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Nenhum produto cadastrado ainda.</p>
      )}
    </div>
  );
}

export default App;