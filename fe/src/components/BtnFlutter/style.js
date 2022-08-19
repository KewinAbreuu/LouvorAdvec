import styled from 'styled-components'

export const Container = styled.div`
  width: 70px;
  height:70px;

  display: flex;
  justify-content: center;
  align-items: center;

  background:#1B8D49;

  border: none;
  border-radius:20px;

  position: absolute;
  bottom: 24px;
  right: 16px;

  cursor:pointer;
  transition: all ease-in-out 0.2s;

  img{
    width: 24px;
    transition: all ease-in-out 0.2s;
  }

  &:hover{
    background:#097736;
  }
`
