import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;

    font-size:16px;
    font-family: 'Inter', sans-serif;
  }

  body{
    background:${({ theme }) => theme.colors.background};
  }
`
