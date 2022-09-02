import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../contexts/auth'
import firebase from '../../services/firebaseConnection'

import { Body, Header, Banner, Welcomme, Container } from './style'
import logo from '../../assets/images/logo.svg'
import banner from '../../assets/images/banner.png'
import menu from '../../assets/icons/menu.svg'
import saida from '../../assets/icons/saida.svg'
import calendar from '../../assets/icons/calendario.svg'
import lider from '../../assets/icons/lider.svg'
import musica from '../../assets/icons/musica.svg'
import comunicado from '../../assets/icons/comunicado.svg'
import cam from '../../assets/icons/cam.svg'
import aula from '../../assets/icons/aula.svg'

import Card from '../../components/Card'
import BottomBar from '../../components/BottomBar'
import LoadPerm from '../../components/LoadPerm'

export default function Home () {
  const { signOut, user } = useContext(AuthContext)
  const [posts, setPosts] = useState([])
  const [config, setConfig] = useState([])
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

  console.log(config)

  return (
    <>
      <Header>
        <div className='contMenu'>
          <img src={menu} className="menu"/>
          <div className='title'>
             <h1>Louvor Advec</h1>
          </div>
                                                                    <div className="sair">
                                                                      <h1>Sair</h1>
                                                                      <img src={saida} onClick={signOut} style={{ width: 24 }}/>
                                                                    </div>
          <img src={logo} onClick={signOut}/>
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

      {!config
        ? <>
         <Container>
              <Card title="Liderança" icon={lider} press='liders' />
              <Card title="Escalas" icon={calendar} press='escalas' />
              <Card title="Repertórios" icon={musica} press='repertorios'/>
            </Container>

            <Container style={{ marginBottom: '150px' }}>
              <Card title="Comunicado" icon={comunicado}/>
              <Card title="Avisos" icon={cam}/>
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
