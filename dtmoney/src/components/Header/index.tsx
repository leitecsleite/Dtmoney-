import { useState } from 'react';
import logoImg from '../../assets/img/Logo.svg';
import Modal from 'react-modal'; 

import { Container, Content } from './style';

interface HeaderProps{
    onOpenNewTransactionModal:() => void; 
}


export function Header({onOpenNewTransactionModal}: HeaderProps) {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dt  money" />
                <button type="button" onClick={onOpenNewTransactionModal}>
                    nova transação
                </button>
           </Content>
        </Container>
    )
}