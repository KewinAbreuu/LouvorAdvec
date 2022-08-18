import { Container } from './style'

export default function InputForm ({ type, placeholder, icon }) {
  return (
      <Container>
        <div>
          <img src={icon}/>
          <input type={type} placeholder={placeholder}/>
        </div>
      </Container>
  )
}
