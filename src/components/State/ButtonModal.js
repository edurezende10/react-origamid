import React from 'react'

const ButtonModal = ({setModal}) => {
    return (
        <button>
            <button style={{margin:"20px"}} onClick={()=>setModal(true)}>Abrir Modal</button>  
        </button>
    )
}

export default ButtonModal
