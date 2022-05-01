import Modal from "react-modal";
import closetImg from "../../assets/close.svg";
import { Container } from "./styles";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      // these two classes below overwrite the modal styling
      // overlay is the background outside the modal area
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >
      <button
        type='button'
        onClick={onRequestClose}
        className='react-modal-close'
      >
        <img src={closetImg} alt='Fechar o modal de cadastrar nova transação' />
      </button>

      {/* Container is actually a styled form */}
      <Container>
        <h2>Cadastrar transação</h2>
        <input placeholder='Título' />
        <input type='number' placeholder='Valor' />
        <input placeholder='Categoria' />

        <button type='submit'>Cadastrar</button>
      </Container>
    </Modal>
  );
}
