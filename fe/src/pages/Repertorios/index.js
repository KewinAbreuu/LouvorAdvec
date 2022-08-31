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
  const [busca, setBusca] = useState('a')

  const ok = busca || 'a'

  useEffect(() => {
    async function loadPosts () {
      await firebase.firestore().collection('repertorio')
        .orderBy('Nome', 'asc')
        .onSnapshot((doc) => {
          const meusPosts = []

          doc.forEach((item) => {
            meusPosts.push({
              id: item.id,
              Nome: item.data().Nome.toUpperCase(),
              Artista: item.data().Artista,
              Tom: item.data().Tom
            })
          })
          setPosts(meusPosts)
        })
    }
    loadPosts()
  }, [busca])

  const loadFilter = posts.filter((post) => {
    return (
      post.Nome.startsWith(ok.toUpperCase())
    )
  })

  return (
    <>
      <Container>
      <Header press='home' name='Repertórios'/>
        <div>
          <Input type='text' placeholder='Buscar' onChange={(e) => setBusca(e.target.value)}/>
        </div>
        <div style={{ marginTop: 16 }}>

          {loadFilter.map((post) => {
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
