import { useContext } from 'react'
import { AuthContext } from '../../contexts/auth'

import { Body, Header, Banner, Welcomme, Container } from './style'
import logo from '../../assets/images/logo.svg'
import banner from '../../assets/images/banner.png'
import menu from '../../assets/icons/menu.svg'
import calendar from '../../assets/icons/calendario.svg'
import lider from '../../assets/icons/lider.svg'
import musica from '../../assets/icons/musica.svg'
import comunicado from '../../assets/icons/comunicado.svg'
import cam from '../../assets/icons/cam.svg'
import aula from '../../assets/icons/aula.svg'

import Card from '../../components/Card'
import BottomBar from '../../components/BottomBar'

export default function Home () {
  const { signOut, user } = useContext(AuthContext)

  return (
    <>
      <Header>
        <div className='contMenu'>
          <img src={menu} className="menu"/>
          <div className='title'>
             <h1>Louvor Advec</h1>
          </div>
          <img src={logo}/>
        </div>
      </Header>
      <Body>
        <BottomBar/>
      <Banner>
        <img src={banner}/>
      </Banner>
      <Welcomme>
        <p>Olá,</p>
        <p>{user.nome}</p>
      </Welcomme>

      <button onClick={signOut}>Sair</button>

      <Container>
        <Card title="Liderança" icon={lider} />
        <Card title="Escalas" icon={calendar} press='escalas' />
        <Card title="Repertórios" icon={musica}/>
      </Container>

      <Container style={{ marginBottom: '150px' }}>
        <Card title="Comunicados" icon={comunicado}/>
        <Card title="Mídias" icon={cam}/>
        <Card title="Aulas" icon={aula}/>
      </Container>
      </Body>
    </>
  )
}
