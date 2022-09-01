import { Container } from './style'
import musica from '../../assets/icons/musica.svg'
import arquivos from '../../assets/icons/arquivos.svg'

import Modal from 'react-modal'
import { useState } from 'react'

Modal.setAppElement('#root')

export default function CardRepertorios ({ titulo, obs, tom, youtube, letra }) {
  const [modalIsOpen, setIsOpen] = useState(false)

  function openModal () {
    setTimeout(() => {
      setIsOpen(true)
    }, '200')
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
        <h2 className='titulomodal'>Titulo: {titulo}</h2>
        <h2 className='titulomodal'>Tom: {tom}</h2>
        <hr /><br></br>
        <p className='TituloCardEscalaModal'>Youtube: </p>
        <a href={youtube}>{youtube}</a>
        <br></br>
        <p className='TituloCardEscalaModal'>Letra/Cifras: </p>
        <a href={letra}>{letra}</a>

        <button onClick={closeModal} className='buttonmodal'>Fechar</button>
      </Modal>

      <Container onClick={openModal}>
        <div className='date'>
          <img src={musica}/>
        </div>

        <div className='info'>
        <h1>{titulo}</h1>
        <p>{obs}</p>
        <h2>Tom: {tom}</h2>
        </div>

        <div className="maisInfo">
          <img src={arquivos}/>
        </div>
      </Container>
    </>
  )
}
