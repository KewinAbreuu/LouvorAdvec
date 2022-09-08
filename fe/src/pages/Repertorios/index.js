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
  const [busca, setBusca] = useState('')

  const [lastKey, setLastKey] = useState()
  const [isEmpty, setEmpty] = useState(false)

  const [adm, setAdm] = useState([])
  const configuracao = localStorage.getItem('idUser')

  useEffect(() => {
    setTimeout(() => {
      async function loadPostsOk () {
        const doc = await firebase.firestore().collection('users')
          .doc(configuracao).get()
        if (!doc.exists) {
          console.log('No such document!')
        } else {
          setAdm(doc.data().adm)
        }
      }
      loadPostsOk()
    }, 1000)
  }, [])

  useEffect(() => {
    firebase.firestore().collection('repertorio')
      .orderBy('Nome', 'desc')
      .limit(5)
      .get()
      .then((collections) => {
        updateState(collections)
      })
  }, [])

  const updateState = (collections) => {
    const isCollectionEmpty = collections.size === 0
    if (!isCollectionEmpty) {
      const colors = collections.docs.map((color) => color.data())
      const Lastdoc = collections.docs[collections.docs.length - 1]
      setPosts((Listofcolors) => [...Listofcolors, ...colors])
      setLastKey(Lastdoc)
    } else {
      setEmpty(true)
    }
  }

  const fetchMorePosts = () => {
    firebase.firestore().collection('repertorio')
      .orderBy('Nome', 'desc')
      .startAfter(lastKey)
      .limit(3)
      .get()
      .then((collections) => {
        updateState(collections)
      })
  }

  const loadFilter = posts.filter((post) => {
    return (
      post.Nome.startsWith(busca.toUpperCase())
    )
  })

  console.log(loadFilter)

  return (
    <>
      <Container>
      <Header press='home' name='Repertórios'/>
        <div>
          <Input type='text' placeholder='Buscar' onChange={(e) => setBusca(e.target.value)}/>
        </div>
        <div style={{ marginTop: 16 }}>

          {posts.length === 0 &&
          <div style={{ width: '100%', height: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}> <Load/> </div>
          }

          {loadFilter.map((post) => {
            return (
              <CardsRepertorios key={post.id}
                titulo={post.Nome}
                tom={post.Tom}
                obs={post.Artista}
                youtube={post.Youtube}
                letra={post.Letra}
              />
            )
          })}
          <div className='contentBtnMore'>
            <a onClick={fetchMorePosts} className='btnMore'>Mostrar mais</a>
          </div>
        </div>

        {adm === 1 &&
         <BtnFlutter press="addRepertorio" icon={add}/>
         }

      </Container>
    </>
  )
}
