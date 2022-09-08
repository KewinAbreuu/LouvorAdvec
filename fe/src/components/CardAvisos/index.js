import { Container } from './style'

import firebase from '../../services/firebaseConnection'

export default function CardAvisos ({ nome, msg, img, id }) {
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
        <h1>{id}</h1>
        </div>

        <div className='info'>
        <h1>{nome}</h1>
        <p>{msg}</p>
        </div>
        <button className='BtnDelete' onClick={deleteFirebase}>Delete</button>
      </Container>
    </>
  )
}
