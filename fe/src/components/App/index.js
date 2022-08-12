import { BrowserRouter } from 'react-router-dom'
import Routes from '../../Routes'

import { ThemeProvider } from 'styled-components'
import DeafaultTheme from '../../assets/styles/theme/default'
import GlobalStyle from '../../assets/styles/global'

import { Container } from './style'

function App () {
  return (
    <BrowserRouter>
      <ThemeProvider theme={DeafaultTheme}>
        <GlobalStyle/>
        <Container>
          <Routes/>
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
