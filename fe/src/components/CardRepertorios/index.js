import { Container } from './style'
import musica from '../../assets/icons/musica.svg'
import arquivos from '../../assets/icons/arquivos.svg'

export default function CardRepertorios ({ titulo, obs, tom }) {
  return (
    <Container>
      <div className='date'>
        <img src={musica}/>
      </div>

      <div className='info'>
       <h1>{titulo}</h1>
       <p>{obs}</p>
       <h2>Tom: {tom}</h2>
      </div>

      <div className="maisInfo">
        <img src={arquivos}/>
      </div>
    </Container>
  )
}
