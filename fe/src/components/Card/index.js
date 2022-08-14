import PropTypes from 'prop-types'
import { Container } from './style'

export default function Card ({ title, icon }) {
  return (
    <Container>
      <img src={icon}/>
      <p>{title}</p>
    </Container>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired
}
