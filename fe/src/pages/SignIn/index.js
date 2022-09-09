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
        <input type='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)} value={email}/>
        <input type='password' placeholder='Senha' onChange={(e) => setPassword(e.target.value)} value={password}/>

      <button type="submit" className='btnAuth'>{!loadinAuth ? 'Acessar' : 'Carregando...'}</button>

      </form>

      <Link to='/signUp'>Criar uma conta</Link>

    </Container>
  )
}
