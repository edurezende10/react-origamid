import React from 'react'
import Produto from './Produto'

const ExercicioEffect = () => {
    const [produto, setProduto] = React.useState(null)
    /*1) primeiro vamos definir um state para a opção de produto iniciando como nulo e será alterado após o usuario escolher uma das opções */

    React.useEffect(()=>{
        const produtoLocal= window.localStorage.getItem('produto')
        if(produtoLocal !== null){
            setProduto(produtoLocal)
        }
        console.log(produtoLocal)
    },[])
    /* 4) nesse efeito, vamos carregar ao iniciar a página o que está armazenado no local storage com a chave produto
    faremos uma verificação se o produto está armazenado no local Storage e se estiver, já será passado para set produtos, para que este monte na tela */


    React.useEffect(()=>{
        if(produto !== null){ 

            window.localStorage.setItem('produto',produto)
        }
    },[produto])
    /* 3) definimos um useEffect para criar uma chave "produto" e preencher com o valor do state produto no localstorage que só será executado quando o produto estiver definido com um valor, fazendo a verificação com IF  */


    const handleClick= ({target}) =>{
        setProduto(target.innerText)
    }
    /*2) definimos dois botoes com eventos, após o clique  o produto é alterado para o valor que está no botão */

   


     
    return (
        <div>
        <h1>Preferência: {produto}</h1>
            <button  onClick={handleClick} style={{margin:'1rem'}}>notebook</button>
            <button onClick={handleClick}>smartphone</button>
            <Produto produto={produto} />
            {/* vamos passar o produto como props, para usa-lo na requisição da api */}
            
            
        </div>
    )
}

export default ExercicioEffect

// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo

