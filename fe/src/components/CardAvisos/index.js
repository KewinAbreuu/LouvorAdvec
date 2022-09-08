import { Container } from './style'

import firebase from '../../services/firebaseConnection'
import { useEffect, useState } from 'react'

export default function CardAvisos ({ nome, msg, img, id }) {
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

  async function deleteFirebase () {
    await firebase.firestore().collection('avisos')
      .doc(id)
      .delete()
      .then(() => {
        alert('Aviso excluído com sucesso!')
      })
      .cathc((e) => {
        alert(e)
      })
  }

  return (
    <>

      <Container >
        <div className='image'>
          <img src={img}/>
        </div>

        <div className='info'>
        <h1>{nome}</h1>
        <p>{msg}</p>
        </div>
        {adm === 1 && <button className='BtnDelete' onClick={deleteFirebase}>Delete</button>}

      </Container>
    </>
  )
}
