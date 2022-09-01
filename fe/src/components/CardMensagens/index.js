import { Container } from './style'
import arquivos from '../../assets/icons/arquivosMusica.svg'

import Modal from 'react-modal'
import { useState } from 'react'

Modal.setAppElement('#root')

export default function CardMensagens ({ titulo, nome, data, conteudo, contato }) {
  const [modalIsOpen, setIsOpen] = useState(false)
  const [mesage, setMesage] = useState('')

  function openModal () {
    setTimeout(() => {
      setIsOpen(true)
    }, '200')
  }

  function closeModal () {
    setIsOpen(false)
  }

  function handleMensage () {
    window.location.assign(`https://wa.me/55${contato}?text=*Liderança Ministério de Louvor Advec*%0A%0A*Referente a Mensagem:*%0A%0A_${conteudo}_%0A%0A*Resposta:*%0A%0A ${mesage}`)
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
        <h2 className='titulomodal' style={{ marginBottom: 8 }}>{nome} {data}</h2>
        <h2 className='titulomodal'>Assunto: {titulo}</h2>
        <hr />
        <h3 className='musicasmodal'>Mensagem:</h3>

        <div className='ContainerModalEscalas'>
          <p>{conteudo}</p>
        </div>

        <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
          <input type='textarea' style={{ width: '100%', height: 100 }}
          onChange={(e) => setMesage(e.target.value)}/>
          <button onClick={handleMensage} className='buttonmodalOk'>Responder</button>
        </div>

        <button onClick={closeModal} className='buttonmodal'>Fechar</button>
      </Modal>

    <Container onClick={openModal}>
      <div className='perfil'>
       <img src={arquivos}/>
      </div>

      <div className='info'>
        <h1>{nome}</h1>
        <p className='titulo'>{titulo}</p>
      </div>

      <div className='MaisInfo'>
        <p>{data}</p>
      </div>
    </Container>
    </>
  )
}
