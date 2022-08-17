import { Container, ContObs } from './style'
import Header from '../../components/Header'
import Input from '../../components/InputForm'
import BtnFlutter from '../../components/BtnFlutter'

import ok from '../../assets/icons/ok.svg'

export default function AddEscalas () {
  function handdleAdd () {
    setTimeout(() => {
      alert('Salvou')
    }, '300')
  }

  return (
    <>
      <Container>
        <BtnFlutter action={handdleAdd} icon={ok}/>

       <Header press='escalas' name='Nova escala'/>

       <div className='title'>
        <h3>Titulo:</h3>
        <Input type='text' placeholder='Ex: Culto de Jovens' />
       </div>

       <div style={{ width: '100%' }}>

        <div style={{ display: 'flex', marginTop: 32 }}>
          <div style={{ width: '60%', marginRight: 8 }}>
            <h3>Data:</h3>
            <Input type='text' placeholder='17/08/2022' />
          </div>

          <div style={{ width: '40%' }}>
          <h3>Hora:</h3>
            <Input type='text' placeholder='19:30' />
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
        <input type='text' placeholder='Ex: Ensaio dia...'/>
       </ContObs>

      </Container>
    </>
  )
}
