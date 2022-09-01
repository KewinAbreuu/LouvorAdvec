import PropTypes from 'prop-types'
import { Container } from './style'
import { useHistory } from 'react-router-dom'

export default function CardLiders ({ title, icon, press }) {
  const history = useHistory()

  function handleClick () {
    setTimeout(() => {
      history.push(`/${press}`)
    }, '200')
  }

  return (
    <Container onClick={handleClick}>
      <img src={icon}/>
      <p>{title}</p>
    </Container>
  )
}

CardLiders.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired
}
