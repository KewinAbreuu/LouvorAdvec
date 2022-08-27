import { Container } from './style'

import HeaderLogo from '../../components/Logo'
import Btn from '../../components/Btn'

import firebase from '../../services/firebaseConnection'
import { useEffect, useContext } from 'react'

import { AuthContext } from '../../contexts/auth'

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
        <div className='containerBtn2'>
          {/* <Btn endPoint='signUp' name='Cadastre-se' background='#52BA7C' color='#fff'/> */}
          <a href="/signUp" className='btnContinuar2'>Cadastre-se</a>
        </div>
      </div>
    </Container>
  )
}
