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
  const [adm, setAdm] = useState([])

  const [value, onChange] = useState(new Date())
  const DATINHA = value.toLocaleDateString()
  const configuracao = localStorage.getItem('idUser')

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
              Equipe: item.data().Equipe,
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
  }, [value])

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
      <Header press='home' name='Escalas'/>
        <div>
        </div>
        <div style={{ marginTop: 16 }}>

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

            {posts.length === 0 &&
            <div style={{ width: '100%', height: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}> <Load/> </div>
            }

          {posts.map((post) => {
            return (
              <CardEscalas key={post.id}
                adm={adm}
                id={post.id}
                titulo={post.Titulo}
                data={post.Data}
                dia={post.DiaSemana}
                hora={post.Hora}
                obs={post.Obs}
                equipe={post.Equipe}
                m1={post.M1}
                m2={post.M2}
                m3={post.M3}
                m4={post.M4}
                m5={post.M5}
              />
            )
          })}
        </div>

         {adm === 1 &&
           <BtnFlutter press="addEscalas" icon={add}/>
          }

      </Container>
    </>
  )
}
