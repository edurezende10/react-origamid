import React from 'react';

const Produto = ({ produto }) => {
  const [dados, setDados] = React.useState(null);
  /* 1) vamos definir o state inicialmente como null e após fazer o fetch na api, vamos alterar dados com as informações recebidas */

  React.useEffect(() => {
    if (produto !== null)
      fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`)
        .then((response) => response.json())
        .then((json) => setDados(json));
  }, [produto]);

  if (dados === null) return null;

  return (
    <div>
      <h1>{dados.nome}</h1>
      <p>R$ {dados.preco}</p>
    </div>
  );
};

export default Produto;
