import { Container } from './style'
import Header from '../../components/Header'
import Input from '../../components/InputForm'
import BtnFlutter from '../../components/BtnFlutter'

import ok from '../../assets/icons/ok.svg'

import musica from '../../assets/icons/musica.svg'
import titulo from '../../assets/icons/titulo.svg'
import { useState } from 'react'
import firebase from '../../services/firebaseConnection'
import tons from './tons'
import { useHistory } from 'react-router-dom'

export default function AddRepertorio () {
  const [titulos, setTitulo] = useState('')
  const [artista, setArtista] = useState('')
  const [tom, setTom] = useState('')
  const [youtube, setYoutube] = useState('')
  const [letra, setLetra] = useState('')

  async function handlleAdd () {
    await firebase.firestore().collection('repertorio')
      .add({
        Nome: titulos.toUpperCase(),
        Artista: artista,
        Tom: tom,
        Youtube: youtube,
        Letra: letra
      })
      .then(() => {
        alert('Música cadastrada')
        handlleEscalas()
      })
      .catch((e) => {
        alert(e)
      })
  }

  const history = useHistory()

  function handlleEscalas () {
    history.push('/repertorios')
  }
  return (
    <>
      <Container>
        <div >
        <BtnFlutter action={handlleAdd} icon={ok} />
        </div>
       <Header press='repertorios' name='Novo repertório'/>

        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 24 }}>
         <img src={musica} style={{ marginRight: 8, width: 24 }}/>
         <p style={{ color: '#fff', fontWeight: 'bold' }}>Adicionar Nova Música</p>
        </div>

       <div className='title'>
        <h3>Nome:</h3>
        <Input type='text' placeholder='Ex: Maranata' icon={titulo} onChange={(e) => setTitulo(e.target.value)}/>
       </div>

       <div className='title'>
        <h3>Artista:</h3>
        <Input type='text' icon={titulo} onChange={(e) => setArtista(e.target.value)}/>
       </div>

      <div className='contSelect'>
       <h3>Tom da música:</h3>
       <select onChange={(e) => setTom(e.target.value)}>
        <option disabled selected>Selecione um tom</option>
          {tons.map((ton) => {
            return (
              <option key={ton.id} value={ton.label}>{ton.label}</option>
            )
          })}
        </select>
      </div>

        <div className='title'>
        <h3>Link Youtube:</h3>
        <Input type='text' icon={titulo} onChange={(e) => setYoutube(e.target.value)}/>
       </div>

       <div className='title'>
        <h3>Link Cifras/Letras:</h3>
        <Input type='text' icon={titulo} onChange={(e) => setLetra(e.target.value)}/>
       </div>
        <h1>{titulos}</h1>
        <h1>{artista}</h1>
        <h1>{tom}</h1>
        <h1>{youtube}</h1>
        <h1>{letra}</h1>
      </Container>
    </>
  )
}
