import { Container } from './style'

export default function Card ({ title, icon }) {
  return (
    <Container>
      <img src={icon}/>
      <strong>{title}</strong>
    </Container>
  )
}
