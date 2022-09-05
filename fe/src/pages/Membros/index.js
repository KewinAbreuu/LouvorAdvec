import { Container } from './style'
import Header from '../../components/Header'
import CardMembros from '../../components/CardMembros'
import Load from '../../components/Load'

import firebase from '../../services/firebaseConnection'
import { useEffect, useState } from 'react'

export default function Membros () {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function loadPosts () {
      await firebase.firestore().collection('users')
        .orderBy('dataCreated', 'desc')
        .onSnapshot((doc) => {
          const meusPosts = []

          doc.forEach((item) => {
            meusPosts.push({
              id: item.id,
              Nome: item.data().nome,
              Config: item.data().config,
              Adm: item.data().adm
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
      <Header press='liders' name='Membros'/>
        <div>
        </div>
        <div style={{ marginTop: 16 }}>
            {posts.length === 0 &&
            <div style={{ width: '100%', height: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}> <Load/> </div>
            }

          {posts.map((post) => {
            return (
              <CardMembros key={post.id}
                nome={post.Nome}
                config={post.Config}
                adm={post.Adm}
                id={post.id}
              />
            )
          })}
        </div>
      </Container>
    </>
  )
}
