import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../contexts/auth'

import { Container } from './style'

import HeaderLogo from '../../components/Logo'
import { Input } from '../../components/Inputs'
import { Link } from 'react-router-dom'

export default function SignUp () {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [whats, setWhats] = useState('')
  const whatsOk = `+55${whats}`
  const [password, setPassword] = useState('')
  const [codAuth, setCodAuth] = useState('')

  const { signUp, loadinAuth } = useContext(AuthContext)

  function handleSubmit (e) {
    e.preventDefault()
    if (nome !== '' && email !== '' && password !== '' && whats !== '' && codAuth !== '') {
      if (codAuth === '251225') {
        signUp(email, password, nome, whatsOk)
      } else { alert('Código de autorização INVÁLIDO.') }
    } else { alert('Preencha todos os campos!') }
  }

  return (
    <Container>
      <HeaderLogo/>

      <form onSubmit={handleSubmit} style={{ width: '100%' }}>
        <Input type='text' placeholder='Nome' onChange={(e) => setNome(e.target.value)} value={nome}/>
        <Input type='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)} value={email}/>
        <Input type='number' placeholder='Whatsapp: (82)900005544' onChange={(e) => setWhats(e.target.value)} value={whatsOk}/>
        <Input type='password' placeholder='Senha' onChange={(e) => setPassword(e.target.value)} value={password}/>
        <Input type='password' placeholder='Cód. Autorização' onChange={(e) => setCodAuth(e.target.value)} value={codAuth}/>
        <button type="submit" className='btnAuth' onClick={handleSubmit}>{!loadinAuth ? 'Criar' : 'Carregando...'}</button>
      </form>

      <Link to='/signIn'>Já tenho uma conta</Link>

      </Container>
  )
}
