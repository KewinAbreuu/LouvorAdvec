import { Header, Banner, Welcomme, Container } from './style'
import logo from '../../assets/images/logo.svg'

import banner from '../../assets/images/banner.png'

import Card from '../../components/Card'
import calendar from '../../assets/icons/calendario.svg'
import lider from '../../assets/icons/lider.svg'
import musica from '../../assets/icons/musica.svg'

export default function Home () {
  return (
    <>
      <Header>
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
        <Card/>
        <Card/>
        <Card/>
      </Container>
    </>
  )
}
