import logo from '../../assets/images/logo.svg'
import lider from '../../assets/icons/lider.svg'
import usuario from '../../assets/icons/usuario.svg'

import { Content, ContainerOverlay, Container } from './style'
import { Link } from 'react-router-dom'
export default function Navbar ({ press, value, logout, name, email, avatar, adm }) {
  return (
    <Content value={value}>

     <Container value={value}>
      <div className='ContentPerfil'>
      <div className='ContainerPerfil'>
        <img src={avatar || usuario}/>

        <div className='ContainerPerfilInfos'>
          <h3>{name}</h3>
          <p>{email}</p>
          {adm === 1 && <p style={{ color: '#B8860B', fontWeight: 'bold' }}>Adm</p>}
        </div>

      </div>
      </div>

      <div className='Ministerio'>
          <img src={logo} />
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h4>Ministério de Louvor</h4>
        </div>
      </div>

        <Link to='/liders' className='Links'>
          <img src={lider}/>
          <h4>Liderança</h4>
        </Link>

{/*
      <div className='Links'>
        <img src={lider}/>
        <h4>Liderança</h4>
      </div> */}

      <div className='Sair' onClick={logout}>
        <p>Sair</p>
      </div>
     </Container>

    <ContainerOverlay value={value} onClick={press}/>
    </Content>
  )
}
