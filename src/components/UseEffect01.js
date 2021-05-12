/* O useEffect vai ser utilizado quando quisermos executar um código especifico, quando algo alterar na tela */
/* a vantagem do useEffect é que com o segundo parametro, vai adicionar as dependencias, assim que o valor das dependencias for alterado, o código será executado */
/* deixando o array de dependencias vazio, estamos dizendo que a função só será executada quando o componente montar */


import React from 'react';

const UseEffect01 = () => {
  const [contar, setContar] = React.useState(0);
  const [dados, setDados] = React.useState(null)


  React.useEffect(() => {
    console.log('executou');
  },[]);
  React.useEffect(
      ()=>{document.title = 'total : ' + contar},[contar]
  )

  React.useEffect(
      ()=>{
          fetch ('https://ranekapi.origamid.dev/json/api/produto/notebook')
          .then((response)=>response.json())
          .then((json)=> setDados(json))
      },[]
  )

  return (
    <> 
    <button onClick={()=>setContar(contar + 1)}>
        {contar}
    </button>
    {
        dados && (
            <div>
                <h1>{dados.nome}</h1>
                <p>R$ {dados.preco * contar}</p>
            </div>
        )
    }

    </>
  );
};

export default UseEffect01;
