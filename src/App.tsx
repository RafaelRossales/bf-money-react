import { Dashboard } from './Components/Dashboard';
import { Header } from './Components/Header';
import { GlobalStyle } from './styles/global'
import { useState } from 'react'
import Modal from 'react-modal';

Modal.setAppElement('#root')

export function App() {
  //Criando gerenciadores de estado do modal
  //Criando estado
  const [isNewTransactionModalOpen,setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal(){
        setIsNewTransactionModalOpen(true);
    }

  function handleCloseNewTransactionModal(){
        setIsNewTransactionModalOpen(false);
    }

  return (
    <>
      <Header onOpenNewTransactionModal = {handleOpenNewTransactionModal} />
      <Dashboard/>

      <Modal 
        isOpen = {isNewTransactionModalOpen} 
        onRequestClose={handleCloseNewTransactionModal}>
          <h2>cadastrar transação....</h2>
      </Modal>

      <GlobalStyle/>
    </>
  );
}

