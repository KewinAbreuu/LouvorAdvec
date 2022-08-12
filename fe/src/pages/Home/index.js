import { Header, Banner, Welcomme, Container } from './style'
import logo from '../../assets/images/logo.svg'

import banner from '../../assets/images/banner.png'

import Card from '../../components/Card'

import { FaBeer } from 'react-icons/fa'

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
        <Card/>
        <Card/>
        <Card/>
      </Container>

      <Container>
        <Card icon={FaBeer}>
        </Card>
        <Card/>
        <Card/>
      </Container>
    </>
  )
}
