import { Container } from './style'
import musica from '../../assets/icons/musica.svg'
import arquivos from '../../assets/icons/arquivos.svg'

import Modal from 'react-modal'
import Embed from 'react-embed'

import { useState } from 'react'

Modal.setAppElement('#root')

export default function CardAvisos ({ nome, msg, img }) {
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

      <Container onClick={openModal}>
        <div className='image'>
          <img src={img}/>
        </div>

        <div className='info'>
        <h1>{nome}</h1>
        <p>{msg}</p>
        </div>

      </Container>
    </>
  )
}
