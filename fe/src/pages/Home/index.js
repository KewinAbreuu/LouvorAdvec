import { Header, Banner, Welcomme, Container } from './style'
import logo from '../../assets/images/logo.svg'
import banner from '../../assets/images/banner.png'
import menu from '../../assets/icons/menu.svg'

import Card from '../../components/Card'
import calendar from '../../assets/icons/calendario.svg'
import lider from '../../assets/icons/lider.svg'
import musica from '../../assets/icons/musica.svg'
import comunicado from '../../assets/icons/comunicado.svg'
import cam from '../../assets/icons/cam.svg'
import aula from '../../assets/icons/aula.svg'

export default function Home () {
  return (
    <>
      <Header>
        <img src={menu} className="menu"/>
        <div className='title'>
         <h1>Advec Maceió</h1>
        </div>
        <img src={logo}/>
      </Header>
      <Banner>
        <img src={banner}/>
      </Banner>
      <Welcomme>
        <p>Olá,</p>
        <p>Kewin Abreu</p>
      </Welcomme>
      <Container>
        <Card title="Liderança" icon={lider}/>
        <Card title="Escalas" icon={calendar}/>
        <Card title="Repertórios" icon={musica}/>
      </Container>

      <Container>
        <Card title="Comunicados" icon={comunicado}/>
        <Card title="Mídias" icon={cam}/>
        <Card title="Aulas" icon={aula}/>
      </Container>
    </>
  )
}
