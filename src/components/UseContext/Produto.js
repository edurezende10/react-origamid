import React from 'react'
import userContext from './userContext'

const Produto = () => {
    const dados = React.useContext(userContext)
    return (
        <div>
          <p>{dados.nome}</p>  
        </div>
    )
}

export default Produto
