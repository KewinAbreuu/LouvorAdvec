import { Container } from './style'

// import add from '../../assets/icons/add.svg'
import { useHistory } from 'react-router-dom'

export default function BtnFlutter ({ press, icon, action, deg }) {
  const history = useHistory()

  function handleClick () {
    setTimeout(() => {
      history.push(`/${press}`)
    }, '300')
  }

  return (
    <Container onClick={action || handleClick } deg={deg}>
      <img src={icon}/>
    </Container>
  )
}
