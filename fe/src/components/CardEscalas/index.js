import { Container } from './style'
import arquivos from '../../assets/icons/arquivosMusica.svg'
import './style.css'

import Modal from 'react-modal'
import { useState } from 'react'

Modal.setAppElement('#root')

export default function CardEscalas ({ titulo, data, dia, hora, obs, m1, m2, m3, m4, m5 }) {
  const [modalIsOpen, setIsOpen] = useState(false)

  function openModal () {
    setIsOpen(true)
  }

  function closeModal () {
    setIsOpen(false)
  }
  return (
    <>

    <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        overlayClassName="modal-overlay"
        className="modal-content"
      >
        <h2>{titulo}</h2>
        <hr />
        <h3>Musicas:</h3>
        <p>{m1}</p>
        <p>{m2}</p>
        <p>{m3}</p>
        <p>{m4}</p>
        <p>{m5}</p>
        <button onClick={closeModal}>Fechar</button>
      </Modal>

    <Container onClick={openModal}>
      <div className='date'>
        <h1>{dia}</h1>
        <h1>{data}</h1>
        <h1>{hora}</h1>
      </div>

      <div className='info'>
       <h1>{titulo}</h1>
       <p>{obs}</p>
       <h2>Equipe 02</h2>
      </div>

      <div className='MaisInfo'>
        <img src={arquivos}/>
      </div>
    </Container>
    </>
  )
}
