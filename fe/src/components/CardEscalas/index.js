import { Container } from './style'

export default function CardEscalas ({ titulo, data, dia, hora, obs, m1, m2, m3, m4, m5 }) {
  return (
    <Container>
      <div className='date'>
        <h1>{dia}</h1>
        <h1>{data}</h1>
        <h1>{hora}</h1>
      </div>

      <div className='info'>
       <h1>{titulo}</h1>
       <p>{obs}</p>
       <h2>Equipe 02</h2>
      </div>
    </Container>
  )
}
