import React from 'react'

const Modal = ({modal,setModal}) => {
    if(modal)
    return (
        <div>
            esse é um modal. <button style={{margin:"20px"}} onClick={()=>setModal(false)}>Fechar</button>
        </div>
    )
    return null
}

export default Modal

