import React from 'react';

const Reatividade = () => {
  const [itens, setItens] = React.useState(['item 1', 'item 2']);

  function handleClick() {
    itens.push('novo item');
    /* FORMA ERRADA, POIS ESTÁ ALTERANDO DIRETAMENTE O VALOR INICIAL DO STATE E NÃO USANDO O setItens */
  }
  const handleClickReativo = () => {
    setItens([...itens, 'novo item']);
    /* FORMA CORRETA, CONHECIDA TAMBEM COMO REATIVA,POIS COM A ALTERAÇÃO OS ITENS REAGIRAM A ESTA MUDANÇA, PARA ALTERAR VOCÊ USA A FUNÇÃO ATUALIZADORA DO STATE setItens  */
    /* TER CUIDADO QUANDO FOR TRABALHAR COM OBJETOS E ARRAYS , POIS PARA ADICIONAR NOVOS VALORES, NÃO PODE USAR O VALOR INICIAL PARA APLICAR O PUSH, TEM QUE USAR A FUNÇÃO ATUALIZADORA E USAR O SPREAD PARA ESPALHAR, ANTES DE ATUALIZAR O VALOR */
  };

  const [ativo, setAtivo] = React.useState(true);

  const handleClickCallback = () => {
    setAtivo((anterior) => !anterior);
    /* podemos alterar o valor anterior a partir de uma callback, funcionando de forma parecida com o evento toggle, sendo que o retorno da função é armazenado no set ativo, não alterando o ativo diretamente */
  };
  return (
    <>
      {itens.map((itens, i) => (
        <li key={i}>{itens}</li>
      ))}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          width: '200px',
          margin: '20px auto',
        }}
      >
        <button style={{margin:"20px"}} onClick={handleClick}>Adicionar Item</button>
        <button style={{margin:"20px"}} onClick={handleClickReativo}>Adicionar Reativo</button>

        <button style={{margin:"20px"}} onClick={handleClickCallback}>
          {ativo ? 'está ativo' : 'esta inativo'}
        </button>
      </div>
    </>
  );
};

export default Reatividade;
