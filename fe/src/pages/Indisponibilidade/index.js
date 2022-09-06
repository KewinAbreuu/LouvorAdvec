import { Container } from './style'
import Header from '../../components/Header'

import CardIndisponibilidade from '../../components/CardIndisponibilidade'
import Load from '../../components/Load'

import firebase from '../../services/firebaseConnection'
import { useEffect, useState } from 'react'

export default function Indisponibilidade () {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function loadPosts () {
      await firebase.firestore().collection('indisponibilidades')
        .orderBy('DataCompare', 'desc')
        .onSnapshot((doc) => {
          const meusPosts = []

          doc.forEach((item) => {
            meusPosts.push({
              id: item.id,
              Data: item.data().Data,
              Nome: item.data().Nome,
              Motivo: item.data().Motivo,
              Contato: item.data().Contato
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
      <Header press='liders' name='Indisponibilidades'/>
        <div>
        </div>
        <div style={{ marginTop: 16 }}>
            {posts.length === 0 &&
            <div style={{ width: '100%', height: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}> <Load/> </div>
            }

          {posts.map((post) => {
            return (
              <CardIndisponibilidade key={post.id}
                titulo={post.Titulo}
                data={post.Data}
                nome={post.Nome}
                conteudo={post.Motivo}
                contato={post.Contato}
              />
            )
          })}
        </div>
          {/* <BtnFlutter press="addEscalas" icon={add}/> */}
      </Container>
    </>
  )
}
