import { Container } from './style'
import Header from '../../components/Header'
import Input from '../../components/InputForm'
import BtnFlutter from '../../components/BtnFlutter'

import ok from '../../assets/icons/ok.svg'

import comunicado from '../../assets/icons/comunicado.svg'
import tituloIcon from '../../assets/icons/titulo.svg'
import dataIcon from '../../assets/icons/data.svg'
import { useState, useContext } from 'react'
import { AuthContext } from '../../contexts/auth'
import firebase from '../../services/firebaseConnection'
import assunto from './assunto'
import { useHistory } from 'react-router-dom'

export default function Comunicar () {
  const { user } = useContext(AuthContext)

  const [assuntos, setAssuntos] = useState('')
  const [valueData, setValueData] = useState('')
  const dateFormated = valueData.split('-').reverse().join('/')
  const [motivo, setMotivo] = useState('')

  const [titulo, setTitulo] = useState('')
  const [conteudo, setConteudo] = useState('')

  const data = new Date()
  const dia = String(data.getDate()).padStart(2, '0')
  const mes = String(data.getMonth() + 1).padStart(2, '0')
  const ano = data.getFullYear()
  const dataAtual = dia + '/' + mes + '/' + ano

  async function handlleIndisponibilidade () {
    await firebase.firestore().collection('indisponibilidades')
      .add({
        Nome: user.nome,
        Data: dateFormated,
        DataCompare: data,
        Motivo: motivo,
        Contato: user.whatsapp
      })
      .then(() => {
        alert('Sucesso!')
        handlleHome()
      })
      .catch((e) => {
        alert(e)
      })
  }

  async function handlleGeral () {
    await firebase.firestore().collection('mensagens')
      .add({
        Nome: user.nome,
        Titulo: titulo,
        Data: dataAtual,
        DataCompare: data,
        Conteudo: conteudo,
        Contato: user.whatsapp
        // Contato:
      })
      .then(() => {
        alert('Sucesso!')
        handlleHome()
      })
      .catch((e) => {
        alert(e)
      })
  }

  const history = useHistory()

  function handlleHome () {
    history.push('/home')
  }

  return (
    <>
      <Container>

       <Header press='home' name='Comunicar'/>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 24 }}>
         <img src={comunicado} style={{ marginRight: 8, width: 24 }}/>
         <p style={{ color: '#fff', fontWeight: 'bold' }}>Comunicar</p>
        </div>
        <div className='contSelect'>
       <h3>Assunto:</h3>
       <select onChange={(e) => setAssuntos(e.target.value)}>
        <option disabled selected>Selecionar assunto</option>
          {assunto.map((ton) => {
            return (
              <option key={ton.id} value={ton.label}>{ton.label}</option>
            )
          })}
        </select>
      </div>

      {assuntos === 'Indisponibilidade' &&
      <>
       <h3>Data:</h3>
       <Input type='date' icon={dataIcon} onChange={(e) => setValueData(e.target.value)} />

       <h3 style={{ marginTop: 16 }}>Motivo:</h3>
       <input type='textarea' onChange={(e) => setMotivo(e.target.value)} className='textArea' />

       <div >
        <BtnFlutter action={handlleIndisponibilidade} icon={ok} />
        </div>
       </>
       }

      {assuntos === 'Geral' &&
      <>
      <h3>Titulo:</h3>
       <Input type='text'icon={tituloIcon} onChange={(e) => setTitulo(e.target.value)} />

       <h3 style={{ marginTop: 16 }}>Mensagem:</h3>
       <input type='textarea' onChange={(e) => setConteudo(e.target.value)} className='textArea' />

       <div >
        <BtnFlutter action={handlleGeral} icon={ok} />
        </div>
       </>
       }

      </Container>
    </>
  )
}
