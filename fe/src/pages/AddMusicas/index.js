import { Container } from './style'
import Header from '../../components/Header'
import BtnFlutter from '../../components/BtnFlutter'

import ok from '../../assets/icons/ok.svg'
import addMusicas from '../../assets/icons/addMusica.svg'
import { useEffect, useState } from 'react'

export default function AddMusicas () {
  const [valor, setValor] = useState('')
  const [valor2, setValor2] = useState('')
  const [valor3, setValor3] = useState('')
  const [valor4, setValor4] = useState('')
  const [valor5, setValor5] = useState('')

  function handdleAdd () {
    setTimeout(() => {
      alert('Salvou')
    }, '300')
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
