import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 166px;
  height: 120px;
  background: ${({ theme }) => theme.colors.primary.dark};
  border-radius: 20px;

  -webkit-box-shadow: -1px 7px 15px -3px #111111;
  box-shadow: -1px 7px 15px -3px #111111;

  &+&{
    margin-left: 10px;
  }

  img{
    width: 30px;
    fill: aliceblue;
  }

  strong{
    margin-top:16px;
    color: ${({ theme }) => theme.colors.text.light}
  }
`
