import { Container } from './style'
import Header from '../../components/Header'
import { Input } from '../../components/Inputs'
import BtnFlutter from '../../components/BtnFlutter'
import CardMensagens from '../../components/CardMensagens'
import Load from '../../components/Load'

import add from '../../assets/icons/add.svg'

import firebase from '../../services/firebaseConnection'
import { useEffect, useState } from 'react'

export default function Mensagens () {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function loadPosts () {
      await firebase.firestore().collection('mensagens')
        .orderBy('DataCompare', 'desc')
        .onSnapshot((doc) => {
          const meusPosts = []

          doc.forEach((item) => {
            meusPosts.push({
              id: item.id,
              Titulo: item.data().Titulo,
              Data: item.data().Data,
              Nome: item.data().Nome,
              Conteudo: item.data().Conteudo,
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
      <Header press='liders' name='Mensagens'/>
        <div>
        </div>
        <div style={{ marginTop: 16 }}>
            {posts.length === 0 &&
            <div style={{ width: '100%', height: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}> <Load/> </div>
            }

          {posts.map((post) => {
            return (
              <CardMensagens key={post.id}
                titulo={post.Titulo}
                data={post.Data}
                mensagem={post.Mensagem}
                nome={post.Nome}
                conteudo={post.Conteudo}
                contato={post.Contato}
              />
            )
          })}
        </div>
          <BtnFlutter press="addEscalas" icon={add}/>
      </Container>
    </>
  )
}
