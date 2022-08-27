import { Container, ContObs } from './style'
import Header from '../../components/Header'
import Input from '../../components/InputForm'
import BtnFlutter from '../../components/BtnFlutter'

import arrow from '../../assets/icons/arrow.svg'
import titulo from '../../assets/icons/titulo.svg'
import data from '../../assets/icons/data.svg'
import hora from '../../assets/icons/hora.svg'

import info from '../../assets/icons/info.svg'
import { useState } from 'react'

export default function AddEscalas () {
  const [valueTitulo, setValueTitulo] = useState('')
  const [valueHora, setValueHora] = useState('')
  const [valueData, setValueData] = useState('')
  const [valueObs, setValueObs] = useState('')

  function handlleAddLocalStorage () {
    localStorage.setItem('titulo', valueTitulo)
    localStorage.setItem('hora', valueHora)
    localStorage.setItem('data', valueData)
    localStorage.setItem('obs', valueObs)
  }

  return (
    <>
      <Container>
        <div onClick={handlleAddLocalStorage}>
        <BtnFlutter press='AddMusicas' icon={arrow} deg />
        </div>
       <Header press='escalas' name='Nova escala'/>

        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 24 }}>
         <img src={info} style={{ marginRight: 8 }}/>
         <p style={{ color: '#fff', fontWeight: 'bold' }}>Info</p>
        </div>

       <div className='title'>
        <h3>Titulo:</h3>
        <Input type='text' placeholder='Ex: Culto de Jovens' icon={titulo} onChange={(e) => setValueTitulo(e.target.value)}/>
       </div>

       <div style={{ width: '100%' }}>

        <div style={{ display: 'flex', marginTop: 32 }}>
          <div style={{ width: '60%', marginRight: 8 }}>
            <h3>Data:{valueData}</h3>
            <Input type='date' icon={data} onChange={(e) => setValueData(e.target.value)} />
          </div>

          <div style={{ width: '40%' }}>
          <h3>Hora:</h3>
            <Input type='time' icon={hora} onChange={(e) => setValueHora(e.target.value)}/>
          </div>
        </div>
       </div>

      <div className='contSelect'>
       <h3>Equipe:</h3>
       <select>
          <option>oi</option>
        </select>
      </div>

      <ContObs>
        <h3>Observações:</h3>
        {/* <input type='text' cols="40" rows="5" placeholder='Ex: Ensaio dia...' onChange={(e) => setValueObs(e.target.value)}/> */}

        <textarea name="Text1" rows="7" onChange={(e) => setValueObs(e.target.value)} maxLength="70"></textarea>
       </ContObs>

      </Container>
    </>
  )
}
