import { Container } from './style'
import arquivos from '../../assets/icons/arquivosMusica.svg'

import Modal from 'react-modal'
import { useState } from 'react'

Modal.setAppElement('#root')

export default function CardIndisponibilidade ({ titulo, nome, data, conteudo, contato }) {
  const [modalIsOpen, setIsOpen] = useState(false)

  function openModal () {
    setTimeout(() => {
      setIsOpen(true)
    }, '200')
  }

  function closeModal () {
    setIsOpen(false)
  }

  function handleJustificado () {
    window.location.assign(`https://wa.me/${contato}?text=*Liderança Ministério de Louvor Advec*%0A%0A*Referente a Indisponibilidade na Data ${data}*%0A%0A*Motivo*:%0A%0A${conteudo}%0A%0A*Resposta:*%0A%0A*Justificado*`)
  }

  function handleNaoJustificado () {
    window.location.assign(`https://wa.me/${contato}?text=*Liderança Ministério de Louvor Advec*%0A%0A*Referente a Indisponibilidade na Data ${data}*%0A%0A*Motivo*:%0A%0A${conteudo}%0A%0A*Resposta:*%0A%0A*Não Justificado*, Por Favor Procurar a Coordenação.`)
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
        <h2 className='titulomodal' style={{ marginBottom: 8 }}>{nome}</h2>
        <h2 className='titulomodal2'>Indisponível: {data}</h2>
        <hr />
        <h3 className='musicasmodal'>Motivo:</h3>

        <div className='ContainerModalEscalas'>
          <p>{conteudo}</p>
        </div>

        <div style={{ width: '100%', display: 'flex' }}>
          <button onClick={handleJustificado} className='buttonmodalOk2'>Justificado</button>
          <button onClick={handleNaoJustificado} className='buttonmodal2'>Não Justificado</button>
        </div>
        <button onClick={closeModal} className='buttonmodal'>Fechar</button>

      </Modal>

    <Container onClick={openModal}>
      <div className='perfil'>
       <img src={arquivos}/>
      </div>

      <div className='info'>
        <h1>{nome}</h1>
        <p className='titulo'>Motivo: {conteudo}</p>
      </div>

      <div className='MaisInfo'>
        <p>{data}</p>
      </div>
    </Container>
    </>
  )
}
