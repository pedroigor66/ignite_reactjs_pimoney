import { FormEvent, useState } from "react";
import Modal from "react-modal";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import closetImg from "../../assets/close.svg";

import { api } from "../../services/api";
import { Container, TransactionTypeContainer, RadioBox } from "./styles";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState("");
  const [transactionType, setTransactionType] = useState("deposit");

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    const data = { title, value, category, transactionType };

    api.post("/transactions", data);
  }

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
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>
        <input
          placeholder='Título'
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type='number'
          placeholder='Valor'
          value={value}
          onChange={(event) => setValue(Number(event?.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox
            type='button'
            onClick={() => {
              setTransactionType("deposit");
            }}
            isActive={transactionType === "deposit"}
            activeColor='green'
          >
            <img src={incomeImg} alt='Entrada' />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type='button'
            onClick={() => {
              setTransactionType("withdraw");
            }}
            isActive={transactionType === "withdraw"}
            activeColor='red'
          >
            <img src={outcomeImg} alt='Saída' />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          placeholder='Categoria'
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />

        <button type='submit'>Cadastrar</button>
      </Container>
    </Modal>
  );
}
