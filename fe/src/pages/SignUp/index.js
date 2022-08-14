import { Container } from './style'

import HeaderLogo from '../../components/Logo'
import Btn from '../../components/Btn'

export default function SignUp () {
  return (
    <Container>
      <HeaderLogo/>
      <div className='groupBtn'>
        <div className='containerBtn'>
          <Btn endPoint='home' name='Entrar'/>
        </div>
        <div className='containerBtn'>
          <Btn endPoint='home' name='Cadastre-se' background='#52BA7C' color='#fff'/>
        </div>
      </div>
    </Container>
  )
}
