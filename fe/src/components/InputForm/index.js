import { Container } from './style'
import musica from '../../assets/icons/musica.svg'

export default function InputForm ({ type, placeholder }) {
  return (
      <Container>
        <div>
          <img src={musica}/>
          <input type={type} placeholder={placeholder}/>
        </div>
      </Container>
  )
}
