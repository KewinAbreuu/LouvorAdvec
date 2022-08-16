import { useContext, useState } from 'react'
import { AuthContext } from '../../contexts/auth'

import { Container } from './style'

import HeaderLogo from '../../components/Logo'
import { Input } from '../../components/Inputs'
import { Link } from 'react-router-dom'

export default function SignIn () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signIn, loadinAuth } = useContext(AuthContext)

  function handleSubmit (e) {
    e.preventDefault()

    if (email !== '' && password !== '') {
      signIn(email, password)
    }
  }

  return (
    <Container>
      <HeaderLogo/>
      <form onSubmit={handleSubmit} >
        <Input type='text' placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
        <Input type='password' placeholder='Senha' onChange={(e) => setPassword(e.target.value)}/>

      <button type="submit" className='btnAuth'>{!loadinAuth ? 'Acessar' : 'Carregando...'}</button>

      </form>

      <Link to='/signUp'>Criar uma conta</Link>

    </Container>
  )
}
