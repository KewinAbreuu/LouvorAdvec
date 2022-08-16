import { Container } from './style'

import HeaderLogo from '../../components/Logo'
import Btn from '../../components/Btn'

export default function SelectLogin () {
  return (
    <Container>
      <div style={{ marginTop: 100 }}>
      <HeaderLogo/>
      </div>
      <div className='groupBtn'>
        <div className='containerBtn'>
          <Btn endPoint='signIn' name='Entrar'/>
        </div>
        <div className='containerBtn'>
          <Btn endPoint='signUp' name='Cadastre-se' background='#52BA7C' color='#fff'/>
        </div>
      </div>
    </Container>
  )
}
