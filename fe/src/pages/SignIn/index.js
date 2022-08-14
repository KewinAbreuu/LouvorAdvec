import { Container } from './style'

// import { Link } from 'react-router-dom'

import HeaderLogo from '../../components/Logo'
import Btn from '../../components/Btn'

export default function SignIn () {
  return (
    <Container>
      <HeaderLogo/>
       <select>
        <option value="" disabled selected>Selecione uma Advec</option>
        <option value='123'>Advec Maceió</option>
        <option value='123'>Advec Rio de janeiro</option>
      </select>
      <Btn endPoint='signUp' name='Continuar'/>
    </Container>
  )
}
