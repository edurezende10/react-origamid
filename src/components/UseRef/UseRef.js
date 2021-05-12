import React from 'react'

const UseRef = () => {
    const video = React.useRef();

    React.useEffect(()=>{
        console.log(video.current)
    },[])
    
    return (
        <video ref={video}/>
          
    )
}

export default UseRef

/* o use ref vai ser para fazer referencia a um elemento da pagina, porem nesse exemplo acima, temos que chama-lo no console após a renderização com useEffect, pois este só vai executar após a renderização da página , pois anteriormente esta variavel seria undefined */ 
