import { Container } from './style'
import arquivos from '../../assets/icons/arquivosMusica.svg'
import './style.css'

import Modal from 'react-modal'
import { useState } from 'react'

Modal.setAppElement('#root')

export default function CardEscalas ({ titulo, data, dia, hora, obs, m1, m2, m3, m4, m5, equipe }) {
  const [modalIsOpen, setIsOpen] = useState(false)
  const dados = m1.split('+')
  const dados2 = m2.split('+')
  const dados3 = m3.split('+')
  const dados4 = m4.split('+')
  const dados5 = m5.split('+')

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
        <h2 className='titulomodal'>Culto: {titulo}</h2>
        <hr />
        <h3 className='musicasmodal'>Musicas:</h3>

        <div className='ContainerModalEscalas'>
          <p className='TituloCardEscalaModal'>{dados[0]}</p>
          <a href={dados[1]}>{dados[1]}</a>
          <div className='ContentAncora'>
             <a href={dados[2]}>{dados[2]}</a>
          </div>
        </div>

        <div className='ContainerModalEscalas'>
          <p className='TituloCardEscalaModal'>{dados2[0]}</p>
          <a href={dados2[1]}>{dados2[1]}</a>
          <div className='ContentAncora'>
              <a href={dados2[2]}>{dados2[2]}</a>
          </div>
        </div>

        <div className='ContainerModalEscalas'>
          <p className='TituloCardEscalaModal'>{dados3[0]}</p>
          <a href={dados3[1]}>{dados3[1]}</a>
          <div className='ContentAncora'>
              <a href={dados3[2]}>{dados3[2]}</a>
          </div>
        </div>

        <div className='ContainerModalEscalas'>
          <p className='TituloCardEscalaModal'>{dados4[0]}</p>
          <a href={dados4[1]}>{dados4[1]}</a>
          <div className='ContentAncora'>
              <a href={dados4[2]}>{dados4[2]}</a>
          </div>
        </div>

        <div className='ContainerModalEscalas'>
          <p className='TituloCardEscalaModal'>{dados5[0]}</p>
          <a href={dados5[1]}>{dados5[1]}</a>
          <div className='ContentAncora'>
             <a href={dados5[2]}>{dados5[2]}</a>
          </div>
        </div>
        <button onClick={closeModal} className='buttonmodal'>Fechar</button>
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
       <h2>Equipe: {equipe}</h2>
      </div>

      <div className='MaisInfo'>
        <img src={arquivos}/>
      </div>
    </Container>
    </>
  )
}
