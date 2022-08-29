import { Container } from './style'
import Header from '../../components/Header'
import { Input } from '../../components/Inputs'
import BtnFlutter from '../../components/BtnFlutter'
import CardEscalas from '../../components/CardEscalas'
import Load from '../../components/Load'

import add from '../../assets/icons/add.svg'

import firebase from '../../services/firebaseConnection'
import { useEffect, useState } from 'react'
import DateTimePicker from 'react-datetime-picker'

import CardsRepertorios from '../../components/CardRepertorios'

export default function Repertorios () {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function loadPosts () {
      await firebase.firestore().collection('repertorio')
        .orderBy('Nome', 'asc')
        .limit('6')
        .onSnapshot((doc) => {
          const meusPosts = []

          doc.forEach((item) => {
            meusPosts.push({
              id: item.id,
              Nome: item.data().Nome,
              Artista: item.data().Artista,
              Tom: item.data().Tom
            })
          })
          setPosts(meusPosts)
        })
    }
    loadPosts()
  }, [])

  return (
    <>
      <Container>
      <Header press='home' name='Repertórios'/>
        <div>
          <Input type='text' placeholder='Buscar'/>
        </div>
        <div style={{ marginTop: 16 }}>

          {posts.map((post) => {
            return (
              <CardsRepertorios key={post.id}
                titulo={post.Nome}
                tom={post.Tom}
                obs={post.Artista}
              />
            )
          })}
        </div>
          <BtnFlutter press="addRepertorio" icon={add}/>
      </Container>
    </>
  )
}
