import { Container } from './style'
import Header from '../../components/Header'
import { Input } from '../../components/Inputs'
import BtnFlutter from '../../components/BtnFlutter'
import CardAvisos from '../../components/CardAvisos'

import Load from '../../components/Load'

import add from '../../assets/icons/add.svg'

import firebase from '../../services/firebaseConnection'
import { useEffect, useState } from 'react'

import Modal from 'react-modal'
Modal.setAppElement('#root')

export default function Avisos () {
  const [posts, setPosts] = useState([])
  const [busca, setBusca] = useState('')

  const [lastKey, setLastKey] = useState()
  const [isEmpty, setEmpty] = useState(false)

  const [adm, setAdm] = useState([])
  const configuracao = localStorage.getItem('idUser')

  const [titulo, setTitulo] = useState()
  const [urlImage, setUrlImage] = useState()
  const [msg, setMsg] = useState()
  const [controlBtn, setControlBtn] = useState(false)

  const [modalIsOpen, setIsOpen] = useState(false)

  function openModal () {
    setTimeout(() => {
      setIsOpen(true)
    }, '200')
  }

  function closeModal () {
    setIsOpen(false)
  }

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
    firebase.firestore().collection('avisos')
      .orderBy('DataCreate', 'desc')
      .limit(2)
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
    firebase.firestore().collection('avisos')
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

  async function handlleAdd () {
    setControlBtn(true)
    await firebase.firestore().collection('avisos')
      .add({
        Nome: titulo,
        ImageUrl: urlImage,
        Mensagem: msg,
        DataCreate: firebase.firestore.FieldValue.serverTimestamp()
      })
      .then(() => {
        closeModal()
      })
      .catch((e) => {
        alert(e)
      })
    setControlBtn(false)
  }

  return (
    <>
     <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        overlayClassName="modal-overlay"
        className="modal-content"
      >

        <h2 className='TituloAvisoss'>Adicionar novo Aviso</h2>
        <div className='DivInput'>
        <input type='text' placeholder='Titulo' className='inputMod' onChange={(e) => setTitulo(e.target.value)}/>
        </div>

        <div className='DivInput'>
        <input type='text' placeholder='Url Image' className='inputMod' onChange={(e) => setUrlImage(e.target.value)}/>
        </div>
        <input type='textarea' placeholder='Mensagem' className='inputModArea' onChange={(e) => setMsg(e.target.value)}/>

        <div className='DivBtn'>

        <button onClick={handlleAdd} className='buttonmodalOk'>{controlBtn === true ? 'carregando...' : 'Salvar'}</button>
        <button onClick={closeModal} className='buttonmodal'>Fechar</button>
        </div>
      </Modal>

      <Container>
      <Header press='home' name='Avisos'/>
        <div>
          <Input type='text' placeholder='Buscar' onChange={(e) => setBusca(e.target.value)}/>
        </div>
        <div style={{ marginTop: 16 }}>

          {posts.length === 0 &&
          <div style={{ width: '100%', height: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}> <Load/> </div>
          }

          {loadFilter.map((post) => {
            return (
              <CardAvisos key={Math.random()}
                id={post.uid}
                nome={post.Nome}
                msg={post.Mensagem}
                img={post.ImageUrl}
              />
            )
          })}
          <div className='contentBtnMore'>
            <a onClick={fetchMorePosts} className='btnMore'>Mostrar mais</a>
          </div>
        </div>

        {adm === 1 &&
         <BtnFlutter action={openModal} icon={add}/>
         }

      </Container>
    </>
  )
}
