import Modal from 'react-modal';
import closeImg from '../../assets/img/Vector.svg';
import incomeImg from '../../assets/img/Entradas.svg';
import outcomeImg from '../../assets/img/Saídas.svg';
import { Container, TransactionTypeContainer, RadioBox } from './styles';
import { useState } from 'react';



interface NewTransactionModal {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModal) {
    const [type, setType] = useState('deposit'); 

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button
                type="button"
                onClick={onRequestClose}
                className="react-modal-close"
            >
                <img src={closeImg} alt="Fechar modal" />
            </button>
            <Container>
                <h2>Cadastrar transações</h2>

                <input
                    type="text"
                    placeholder='Titulo'
                />

                <input type="number"
                    placeholder="valor"
                    id="" />

                <TransactionTypeContainer>
                    <RadioBox
                        type="button"
                        //className ={type == 'deposit' ? 'active': ''}
                        isActive = {type == 'deposity'}
                        onClick={() => {setType('deposity')}}
                        activeColor = "green"
                    >
                        <img src={incomeImg} alt="Entradas" />
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox
                        type="button"
                        onClick={() => {setType('withdraw')}}
                        isActive = {type == 'withdraw'}
                        activeColor= "red"
                    >
                        <img src={outcomeImg} alt="Saídas" />
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>

                <input type="text"
                    placeholder='categororia'
                />

                <button type="submit">
                    Cadastrar
                </button>
            </Container>
        </Modal>
    );
}