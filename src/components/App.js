import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Menu from './Menu';
import Modal from './Modal/Modal';
import '../styles/app.scss'

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalPage, setModalPage] = useState('');

  const close = () => setModalOpen(false);
  const open = (page) => {
    setModalPage(page);
    setModalOpen(true);
  }

  return (
    <div>
      <Menu openModal={open}/>
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={true}
      >
        {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} page={modalPage}/>}
      </AnimatePresence>
      
    </div>
  );
}

export default App;
