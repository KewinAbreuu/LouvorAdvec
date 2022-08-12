import PropTypes from 'prop-types'
import { Container } from './style'

export default function Card ({ title, icon }) {
  return (
    <Container>
      <img src={icon}/>
      <strong>{title}</strong>
    </Container>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired
}
