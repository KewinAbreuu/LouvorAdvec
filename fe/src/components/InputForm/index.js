import { Container } from './style'

export default function InputForm ({ type, placeholder, icon, onChange }) {
  return (
      <Container>
        <div>
          <img src={icon}/>
          <input type={type} placeholder={placeholder} onChange={onChange}/>
        </div>
      </Container>
  )
}
