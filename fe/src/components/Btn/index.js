import { Container } from './style'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

export default function SignIn ({ endPoint, name, background, color }) {
  return (
    <Container background={background} color={color}>
      <Link to={`/${endPoint}`}className='btnContinuar'>
        <p>{name}</p>
      </Link>
    </Container>
  )
}

SignIn.propTypes = {
  endPoint: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
}
