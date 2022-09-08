import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../contexts/auth'
import firebase from '../../services/firebaseConnection'

import { Body, Header, Banner, Welcomme, Container } from './style'

import logo from '../../assets/images/logo.svg'
import banner from '../../assets/images/banner.png'
import menu from '../../assets/icons/menu.svg'
import calendar from '../../assets/icons/calendario.svg'
import lider from '../../assets/icons/lider.svg'
import musica from '../../assets/icons/musica.svg'
import comunicado from '../../assets/icons/comunicado.svg'
import cam from '../../assets/icons/info.svg'
import aula from '../../assets/icons/aula.svg'

import Card from '../../components/Card'
import BottomBar from '../../components/BottomBar'
import LoadPerm from '../../components/LoadPerm'
import Navbar from '../../components/Navbar'

export default function Home () {
  const { signOut, user } = useContext(AuthContext)
  const [posts, setPosts] = useState([])
  const [config, setConfig] = useState([])
  const [nav, setNav] = useState(false)

  useEffect(() => {
    async function loadPosts () {
      await firebase.firestore().collection('config')
        .onSnapshot((doc) => {
          const meusPosts = []

          doc.forEach((item) => {
            meusPosts.push({
              id: item.id,
              NomeCompany: item.data().NomeCompany
            })
          })

          setPosts(meusPosts)
        })
    }
    loadPosts()
  }, [])

  const configuracao = localStorage.getItem('idUser')

  useEffect(() => {
    setTimeout(() => {
      async function loadPostsOk () {
        const doc = await firebase.firestore().collection('users')
          .doc(configuracao).get()
        if (!doc.exists) {
          console.log('No such document!')
        } else {
          setConfig(doc.data().config)
        }
      }
      loadPostsOk()
    }, 1000)
  }, [])

  function controlNav () {
    setNav(!nav)
  }

  return (
    <>
        <Navbar press={controlNav}
         value={nav}
         logout={signOut}
         name={user.nome}
         email={user.email}
         avatar={user.avatarUrl}
         adm={user.adm}
         />
      <Header>
        <div className='contMenu'>
          <img src={menu} className="menu" onClick={controlNav}/>
          <div className='title'>
             <h1>Louvor Advec</h1>
          </div>

          <img src={logo}/>
        </div>
      </Header>
      <Body>
        {posts.map((item) => {
          return (
            <BottomBar key={item.id} NomeCompany={item.NomeCompany}/>
          )
        })}
      <Banner>
        <img src={banner}/>
      </Banner>
      <Welcomme>
        <p>Olá,</p>
        <p>{user.nome}</p>
      </Welcomme>

      {config === 1
        ? <>
         <Container>

              <Card title="Liderança" icon={lider} press='liders' />
              <Card title="Escalas" icon={calendar} press='escalas' />
              <Card title="Repertórios" icon={musica} press='repertorios'/>
            </Container>

            <Container style={{ marginBottom: '150px' }}>
              <Card title="Comunicar" icon={comunicado} press='comunicar'/>
              <Card title="Avisos" icon={cam} press='avisos'/>
              <Card title="Aulas" icon={aula}/>
            </Container>
            </>
        : <>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 32 }}>
              <LoadPerm/>
            </div>
          </>
      }

      </Body>
    </>
  )
}
