import { BrowserRouter } from 'react-router-dom'
import Routes from '../../routes'

import { ThemeProvider } from 'styled-components'
import DeafaultTheme from '../../assets/styles/theme/default'
import GlobalStyle from '../../assets/styles/global'

import { Container } from './style'

import AuthProvider from '../../contexts/auth'

function App () {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ThemeProvider theme={DeafaultTheme}>
          <GlobalStyle/>
          <Container>
            <Routes/>
          </Container>
        </ThemeProvider>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
