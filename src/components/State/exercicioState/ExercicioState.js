import React from 'react';
import Produto from './Produto';

const ExercicioState = () => {
  /* 1 */ const [dados, setDados] = React.useState(null);
  const [carregando, setCarregando] = React.useState(null)

  const handleClick = async (event) => {
    setCarregando(true)
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`,
    );
    const json = await response.json();
    console.log(json);
    setDados(json);
    setCarregando(false)
  };

  return (
    <div>
      <button style={{ margin: '.5rem' }} onClick={handleClick}>
        Notebook
      </button>
      <button style={{ margin: '.5rem' }} onClick={handleClick}>
        Smartphone
      </button>
      <button style={{ margin: '.5rem' }} onClick={handleClick}>
        Tablet
      </button>
      {carregando && <p>Carregando...</p>}
      {!carregando && dados && <Produto dados={dados} />}
    </div>
  );
};

export default ExercicioState;
/* 1 se o estado do componente muda, será necessário usar o hook neste */
