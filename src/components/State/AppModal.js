import React from 'react'
import ButtonModal from './ButtonModal'
import Modal from './Modal'

const AppModal = () => {
    const [modal,setModal]= React.useState(false)
    return (
        <div>
        <h1>Passando props no state</h1>
            <Modal modal={modal} setModal={setModal} />
            <ButtonModal setModal={setModal} />  
        </div>
    )
}

export default AppModal

/* na função modal.js, temos um componente que quando receber true como parametro de setModal, este vai abrir e aparecer que é um modal e aparecer um botão para fechar 

que no momento do clique em fechar, vai passar o setmodal como false, portanto irá fechar */


/* no component button modal, temos um componente que vai passar ao set modal true para que abra o modal */

/* colocamos  o state na função principal, que seria o AppModal, logo após definirmos o use state criamos uma div e chamamos primeiro o botão  que só vai aparecer após o set modal receber true, portanto este não irá aparecer pois inicialmente ele começa com false, pois foi definido acima no useState*/

/* Logo abaixo vai aparecer o buttonModal que ao clicar, passamos true como argumento no setModal, portanto o modal vai abrir */

/* alem de aparecer a mensagem que o modal abriu, vai aparecer um botão para fechar o modal, que vai passar o setmodal como false */