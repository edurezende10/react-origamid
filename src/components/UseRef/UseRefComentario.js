import React from 'react';

const UseRefComentario = () => {
  const [comentarios, setComentarios] = React.useState([]);
  const [input, setInput] = React.useState('');
  const inputElement = React.useRef()

  const handleClick = () => {
    setComentarios((comentarios) => [...comentarios, input]);
     setInput('');
     inputElement.current.focus()

    
  };

  return (
    <div>
      <ul>
        {comentarios.map((comentario, index) => (
          <li key={index}>{comentario}</li>
        ))}
      </ul>
      <input
        type="text"
        onChange={(event) => setInput(event.target.value)}
        value={input}
        ref={inputElement}
        name=""
        id=""
      />
      <br />
      <button onClick={handleClick}>Enviar</button>
    </div>
  );
};

export default UseRefComentario;

/* nesse exemplo:
1- definimos um estado que vai armazenar um array de comentários 
2- definimos um estado que vai tratar o valor que será digitado e armazena-lo
3- criamos uma ul e passamos um map para percorrer o array de comentário e criar LIs a partir de cada indice desse array
4 - criamos o input que irá receber a informação do usuario 
5 - nesse input que possui um evento OnChange, que irá capturar o valor digitado e armazenar no input
6 - no botão chamaos a função handleClick, que vai adicionar os comentários já existentes com spread, e adicionar o novo comentário que está armazenado no input.
7 - depois de adicionar, limpamos o valor do input com a função setinput
8 - Por fim, para manter o foco do mouse no input, fazemos referência a este elemento com o use ref, criando uma variavel e adicionando esse hook a ela 
9- na função handleClick chamamos a função que armazena o hook useRef, inputElement e passamos o evento de input focus
inputElement.current.focus()
10 -  lembrando que para usar o useRef, sempre temos que referencia-lo com o current 

*/
