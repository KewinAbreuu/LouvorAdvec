import { Container } from './style'
import Header from '../../components/Header'

import Load from '../../components/Load'

import CardLiders from '../../components/CardLiders'

import info from '../../assets/icons/info.svg'

export default function Liders () {
  return (
    <>
      <Container>
      <Header press='home' name='Liderança'/>

      <div className="content">
        <CardLiders title='Mensagens' icon={info} press="mensagens"/>
        <CardLiders title='Membros' icon={info}/>
      </div>

      <div className="content">
        <CardLiders title='Indisponibilidades' icon={info}/>
        <CardLiders title='Ideias' icon={info}/>
      </div>

      </Container>
    </>
  )
}
