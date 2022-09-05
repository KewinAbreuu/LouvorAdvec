import { Container } from './style'
import arquivos from '../../assets/icons/arquivosMusica.svg'

import Modal from 'react-modal'
import { useState } from 'react'
import firebase from '../../services/firebaseConnection'

Modal.setAppElement('#root')

export default function CardMembros ({ nome, config, adm, id }) {
  const [toggle, setToggle] = useState(1)
  const [Ladm, setAdm] = useState(1)

  function OnOff () {
    if (toggle === 1) {
      setToggle(0)
      handlleConfig()
    } else {
      setToggle(1)
      handlleConfig()
    }
  }

  async function handlleConfig () {
    await firebase.firestore().collection('users')
      .doc(id)
      .update({
        config: toggle
      })
  }

  function Adm () {
    if (Ladm === 1) {
      setAdm(0)
      handlleAdm()
    } else {
      setAdm(1)
      handlleAdm()
    }
  }

  async function handlleAdm () {
    await firebase.firestore().collection('users')
      .doc(id)
      .update({
        adm: Ladm
      })
  }

  return (
    <>

    <Container toggle={config} adm={adm}>
      <div className='perfil'>
       <img src={arquivos}/>
      </div>

      <div className='info'>
        <h1>{nome}</h1>
      </div>

      <div className='MaisInfo'>
        <button className='BtnLider' onClick={Adm} >Adm</button>
        <button className='BtnOnOff' onClick={OnOff}>{config ? 'Desativar' : 'Ativar'}</button>
      </div>
    </Container>
    </>
  )
}
