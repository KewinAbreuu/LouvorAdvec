import PropTypes from 'prop-types'
import { Container } from './style'
import { useHistory } from 'react-router-dom'

export default function Card ({ title, icon, press }) {
  const history = useHistory()

  function handleClick () {
    history.push(`/${press}`)
  }

  return (
    <Container onClick={handleClick}>
      <img src={icon}/>
      <p>{title}</p>
    </Container>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired
}
