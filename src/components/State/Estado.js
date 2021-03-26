import React from 'react';

const Estado = () => {
  const [ativo, setAtivo] = React.useState(true);
  const [ dados,setDados] = React.useState({nome:"Andre",idade:'30'})

  function handleClick() {
    setAtivo(!ativo);
    setDados(dados.idade++)
    setDados({...dados, faculdade:"possui Faculdade"})
  }
  return (
    <div>
      <h1>state 01</h1>
      <p>{dados.nome}</p>
      <p>{dados.idade}</p>
      <p>{dados.faculdade}</p>
      <button onClick={handleClick}>
        {ativo ? 'Botão Ativo' : 'Botão Inativo'}
      </button>
    </div>
  );
};

export default Estado;

/* estado representa as caracteristicas do elemento naquele momento */

/* os hooks são usados em componentes funcionais, para que a renderização seja isolada somente ao elemento que foi modificado */

/* ----------------------USE STATE---------------- */
/* O useState é uma função que retorna uma Array com 2 valores. O primeiro valor guarda o dado do estado atual, pode ser qualquer tipo de dado como strings, arrays, números, boolean, null, undefined e objetos. O segundo valor é uma função que pode ser utilizada para modificarmos o estado do primeiro valor.

Quando a função de modificação do estado é ativada, todos os componentes que dependerem do estado, serão renderizados novamente e os seus filhos também. É isso que garante a reatividade de componentes funcionais no React. */


/* -----------------------MULTIPLOS ESTADOS------------------ */

/* podemos adicionar multiplos estados, podendo passar até objetos*/

/* no caso acima, para não sobrescrever os dados anteriores ao adicionar a propiedade faculdade, utilizamos o spread operator */

/*  recomedado colocar dados que há uma ligação, como nome e idade juntos, pois faz sentido que estes sejam agrupados no mesmo estados, pois eles se co-relacionam  */
