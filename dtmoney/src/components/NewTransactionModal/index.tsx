import Modal from 'react-modal';
import closeImg from '../../assets/img/Vector.svg';
import incomeImg from '../../assets/img/Entradas.svg';
import outcomeImg from '../../assets/img/Saídas.svg';
import { Container, TransactionTypeContainer, RadioBox } from './styles';
import { useState } from 'react';
import { FormEvent } from 'react';
import { useTransactions } from '../../hooks/useTransactions';



interface NewTransactionModal {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModal) {
    const {createTransactions } = useTransactions();

    const [type, setType] = useState('deposit');
    const [title, setTitle] = useState('');
    const [value, setValue] = useState(0);
    const [category, setCategory] = useState('');
    const [createdAt, setCreatedAt] = useState({})


    function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();

        createTransactions({
            title,
            amount: value,
            category,
            type,
        })

    }
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
            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar transações</h2>

                <input
                    type="text"
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                    placeholder='Titulo'
                />

                <input type="number"
                    value={value}
                    onChange={event => setValue(Number(event.target.value))}
                    placeholder="valor"
                    id="" />

                <TransactionTypeContainer>
                    <RadioBox
                        type="button"
                        //className ={type == 'deposit' ? 'active': ''}
                        isActive={type == 'deposity'}
                        onClick={() => { setType('deposity') }}
                        activeColor="green"
                    >
                        <img src={incomeImg} alt="Entradas" />
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox
                        type="button"
                        onClick={() => { setType('withdraw') }}
                        isActive={type == 'withdraw'}
                        activeColor="red"
                    >
                        <img src={outcomeImg} alt="Saídas" />
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>

                <input type="text"
                    placeholder='categororia'
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                />

                <button type="submit">
                    Cadastrar
                </button>
            </Container>
        </Modal>
    );
}