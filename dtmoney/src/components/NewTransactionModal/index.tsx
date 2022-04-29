import Modal from 'react-modal';
import closeImg from '../../assets/img/Vector.svg'; 
import { Container } from './styles';



interface NewTransactionModal {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModal) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName ="react-modal-overlay"
            className = "react-modal-content"
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