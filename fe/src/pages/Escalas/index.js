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

export default function Escalas () {
  const [posts, setPosts] = useState([])
  const [loadingPosts, setLoadingPosts] = useState(false)

  const [value, onChange] = useState(new Date())
  const DATINHA = value.toLocaleDateString()

  useEffect(() => {
    async function loadPosts () {
      await firebase.firestore().collection('escala')
        .where('Data', '==', DATINHA)
        .orderBy('DataCompare', 'desc')
        .onSnapshot((doc) => {
          const meusPosts = []

          doc.forEach((item) => {
            meusPosts.push({
              id: item.id,
              Titulo: item.data().Titulo,
              Data: item.data().Data,
              DiaSemana: item.data().DiaSemana,
              Hora: item.data().Hora,
              Obs: item.data().Obs,
              M1: item.data().M1,
              M2: item.data().M2,
              M3: item.data().M3,
              M4: item.data().M4,
              M5: item.data().M5
            })
          })
          setPosts(meusPosts)
        })
    }
    loadPosts()
    setLoadingPosts(true)
  }, [value])

  return (
    <>
      <Container>
      <Header press='home' name='Escalas'/>
        <div>
          {/* <Input type='text' placeholder='Buscar'/> */}
        </div>
        <div style={{ marginTop: 16 }}>

          {/* <input type="date" onChange={(e) => setDataAtual(e.target.value)} /> */}
          <div className="contentpicker">
            <div></div>
            <DateTimePicker onChange={onChange} value={value}
                disableClock={true}
                isClockOpen={true}
                format="dd-MM-y"
                calendarClassName="PickerIN"
                className="pickerDATE"
              />
            </div>

          {!!loadingPosts === false && <Load/>}

          {posts.map((post) => {
            return (
              <CardEscalas key={post.id}
                titulo={post.Titulo}
                data={post.Data}
                dia={post.DiaSemana}
                hora={post.Hora}
                obs={post.Obs}
              />
            )
          })}
        </div>
          <BtnFlutter press="addEscalas" icon={add}/>
      </Container>
    </>
  )
}
