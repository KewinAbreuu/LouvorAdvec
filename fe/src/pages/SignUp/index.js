import { useContext, useState } from 'react'
import { AuthContext } from '../../contexts/auth'

import { Container } from './style'

import HeaderLogo from '../../components/Logo'
import { Input } from '../../components/Inputs'
import { Link } from 'react-router-dom'

export default function SignUp () {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signUp } = useContext(AuthContext)

  function handleSubmit (e) {
    e.preventDefault()

    if (nome !== '' && email !== '' && password !== '') {
      signUp(email, password, nome)
    }
  }

  return (
    <Container>
      <HeaderLogo/>
      <h1>PAGINA DE Cadastro</h1>
      <form onSubmit={handleSubmit}>
        <Input type='text' placeholder='Nome' onChange={(e) => setNome(e.target.value)}/>
        <Input type='text' placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
        <Input type='password' placeholder='Senha' onChange={(e) => setPassword(e.target.value)}/>
        <button type="submit">Acessar</button>

        <h1>{nome}</h1>
        <h1>{email}</h1>
        <h1>{password}</h1>
      </form>

      <Link to='/signIn'>Já tenho uma conta</Link>

    </Container>
  )
}
