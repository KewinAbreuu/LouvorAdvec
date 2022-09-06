import { Container } from './style'
import Header from '../../components/Header'

import CardLiders from '../../components/CardLiders'

import info from '../../assets/icons/info.svg'

import firebase from '../../services/firebaseConnection'
import { useEffect, useState } from 'react'

export default function Liders () {
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

  return (
    <>
      <Container>
      <Header press='home' name='Liderança'/>
      {adm === 1
        ? <>
         <div className="content">
          <CardLiders title='Mensagens' icon={info} press="mensagens"/>
          <CardLiders title='Membros' icon={info} press="membros"/>
        </div>

        <div className="content">
          <CardLiders title='Indisponibilidades' icon={info} press="indisponibilidade"/>
        </div>
      </>
        : <>
          <spam style={{ textAlign: 'center', color: '#f00' }}>Aguardando permissões...</spam>
          </>
      }

      </Container>
    </>
  )
}
