/* O useEffect vai ser utilizado quando quisermos executar um código especifico, quando algo alterar na tela */

import React from 'react'

const UseEffect01 = () => {
    const [contar,setContar] = React.useState(0)
    React.useEffect(
        ()=>{
            console.log(contar)
        }
    )
    const valor = contar * 5

    return (
        <>
        <button onClick={()=>{setContar(contar+1)}}>
            aumentar
            
        </button>
        <button onClick={()=>{setContar(contar-1)}}>
diminuir            
        </button>
        <p>valor:{valor}</p>
        <p>Quantidade {contar}</p>
        </>
        
    )
}

export default UseEffect01
