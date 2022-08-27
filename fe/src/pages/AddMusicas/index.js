import { Container } from './style'
import Header from '../../components/Header'
import BtnFlutter from '../../components/BtnFlutter'

import ok from '../../assets/icons/ok.svg'
import addMusicas from '../../assets/icons/addMusica.svg'
import { useEffect, useState } from 'react'
import firebase from '../../services/firebaseConnection'
import { useHistory } from 'react-router-dom'

export default function AddMusicas () {
  const [valor, setValor] = useState('')
  const [valor2, setValor2] = useState('')
  const [valor3, setValor3] = useState('')
  const [valor4, setValor4] = useState('')
  const [valor5, setValor5] = useState('')

  const history = useHistory()

  function handlleEscalas () {
    history.push('/escalas')
  }

  async function handdleAdd () {
    const titulo = localStorage.getItem('titulo')
    const hora = localStorage.getItem('hora')
    const data = localStorage.getItem('data')
    const obs = localStorage.getItem('obs')

    await firebase.firestore().collection('escala')
      .add({
        Titulo: titulo,
        Hora: hora,
        Data: data,
        Obs: obs,
        M1: valor,
        M2: valor2,
        M3: valor3,
        M4: valor4,
        M5: valor5
      })
      .then(() => {
        alert('Adicionada com Sucesso!')
        handlleEscalas()
      })
      .cath((e) => {
        alert(e)
      })
  }

  return (
    <>
      <Container>
        <BtnFlutter action={handdleAdd} icon={ok}/>

       <Header press='addEscalas' name='Nova escala'/>

       <div style={{ display: 'flex', alignItems: 'center', marginBottom: 24 }}>
         <img src={addMusicas} style={{ marginRight: 8 }}/>
         <p style={{ color: '#fff', fontWeight: 'bold' }}>Músicas</p>
        </div>

          <div key='123' className='contSelect'>
          <h3>Musica 1:</h3>
          <select onChange={(e) => setValor(e.target.value)}>
             <option disabled selected>Selecione uma musica</option>
             <option value='Tudo sobre você - Morada'>Tudo sobre você - Morada</option>
             <option value='Galileu - Fernandinho'>Galileu - Fernandinho</option>
           </select>
         </div>

         <div key='123' className='contSelect2'>
          <h3>Musica 2:</h3>
          <select onChange={(e) => setValor2(e.target.value)}>
             <option disabled selected>Selecione uma musica</option>
             <option value='Tudo sobre você - Morada'>Tudo sobre você - Morada</option>
             <option value='Galileu - Fernandinho'>Galileu - Fernandinho</option>
           </select>
         </div>

         <div key='123' className='contSelect'>
          <h3>Musica 3:</h3>
          <select onChange={(e) => setValor3(e.target.value)}>
             <option disabled selected>Selecione uma musica</option>
             <option value='Tudo sobre você - Morada'>Tudo sobre você - Morada</option>
             <option value='Galileu - Fernandinho'>Galileu - Fernandinho</option>
           </select>
         </div>

         <div key='123' className='contSelect2'>
          <h3>Musica 4:</h3>
          <select onChange={(e) => setValor4(e.target.value)}>
             <option disabled selected>Selecione uma musica</option>
             <option value='Tudo sobre você - Morada'>Tudo sobre você - Morada</option>
             <option value='Galileu - Fernandinho'>Galileu - Fernandinho</option>
           </select>
         </div>

         <div key='123' className='contSelect'>
          <h3>Musica 5:</h3>
          <select onChange={(e) => setValor5(e.target.value)}>
             <option disabled selected>Selecione uma musica</option>
             <option value='Tudo sobre você - Morada'>Tudo sobre você - Morada</option>
             <option value='Galileu - Fernandinho'>Galileu - Fernandinho</option>
           </select>
         </div>
      </Container>
    </>
  )
}
