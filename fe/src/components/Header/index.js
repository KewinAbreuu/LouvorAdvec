import { Container } from './style'
import { useHistory } from 'react-router-dom'

import arrow from '../../assets/icons/arrow.svg'

export default function Header ({ name, press }) {
  const history = useHistory()

  function handleClick () {
    history.push(`/${press}`)
  }

  return (
    <>
      <Container>
        <div style={{ position: 'relative' }} onClick={handleClick} >
          <img src={arrow}/>
        </div>
        <h1>{name}</h1>
      </Container>
    </>
  )
}
