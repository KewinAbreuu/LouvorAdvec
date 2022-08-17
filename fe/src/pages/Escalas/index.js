import { Container } from './style'
import Header from '../../components/Header'
import { Input } from '../../components/Inputs'
import BtnFlutter from '../../components/BtnFlutter'
import CardEscalas from '../../components/CardEscalas'

import add from '../../assets/icons/add.svg'

export default function Escalas () {
  return (
    <>
      <Container>
      <Header press='home' name='Escalas'/>
        <div>
          <Input type='text' placeholder='Buscar'/>
        </div>
        <div style={{ marginTop: 16 }}>
         <CardEscalas/>
         <CardEscalas/>
         <CardEscalas/>
        </div>
          <BtnFlutter press="addEscalas" icon={add}/>
      </Container>
    </>
  )
}
