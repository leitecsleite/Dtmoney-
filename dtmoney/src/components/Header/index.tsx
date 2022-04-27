import { useState } from 'react';
import logoImg from '../../assets/img/Logo.svg';
import Modal from 'react-modal'; 

import { Container, Content } from './style';


export function Header() {
    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false); 
     
    function handleOpenNewTransactionModal(){

    }

    function handleCloseNewTransactionModal(){
        setIsNewTransactionModalOpen(false)
    }

    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dt  money" />
                <button type="button" onClick={handleOpenNewTransactionModal}>
                    nova transação
                </button>
           </Content>
        </Container>
    )
}