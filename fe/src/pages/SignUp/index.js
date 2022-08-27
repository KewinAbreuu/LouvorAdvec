import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../contexts/auth'

import { Container } from './style'

import HeaderLogo from '../../components/Logo'
import { Input } from '../../components/Inputs'
import { Link } from 'react-router-dom'

export default function SignUp () {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [codAuth, setCodAuth] = useState('')

  const { signUp, loadinAuth } = useContext(AuthContext)

  function handleSubmit (e) {
    e.preventDefault()
    if (nome !== '' && email !== '' && password !== '' && codAuth !== '') {
      if (codAuth === '251225') {
        signUp(email, password, nome)
      } else { alert('Código de autorização INVÁLIDO.') }
    } else { alert('Preencha todos os campos!') }
  }

  return (
    <Container>
      <HeaderLogo/>

      <form onSubmit={handleSubmit} style={{ width: '100%' }}>
        <Input type='text' placeholder='Nome' onChange={(e) => setNome(e.target.value)}/>
        <Input type='text' placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
        <Input type='password' placeholder='Senha' onChange={(e) => setPassword(e.target.value)}/>
        <Input type='password' placeholder='Cód. Autorização' onChange={(e) => setCodAuth(e.target.value)}/>
        <button type="submit" className='btnAuth'>{!loadinAuth ? 'Criar' : 'Carregando...'}</button>
      </form>

      <Link to='/signIn'>Já tenho uma conta</Link>

      </Container>
  )
}
