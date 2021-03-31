import { Dashboard } from './Components/Dashboard';
import { Header } from './Components/Header';
import { GlobalStyle } from './styles/global'
import { useState } from 'react'
import Modal from 'react-modal';
import { NewTransactionModal } from './Components/NewTransactionModal';
import { TransactionsProvider } from './TransactionContext';

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
    <TransactionsProvider>
      <Header onOpenNewTransactionModal = {handleOpenNewTransactionModal} />
      <Dashboard/>
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle/>
    </TransactionsProvider>
  );
}

