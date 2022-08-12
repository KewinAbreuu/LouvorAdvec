import { Container } from './style'

export default function Card ({ icon }) {
  return (
    <Container>
      <img src={icon}/>
    </Container>
  )
}
