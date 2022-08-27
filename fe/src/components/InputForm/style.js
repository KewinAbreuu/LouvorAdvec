import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  margin-left: 16px;

  div{
    display: flex;
  }

  img{
    width: 16px;
    position: relative;
    margin-right: -28px;
    z-index: 5;
  }

  input{
  background: #4f4f4f;
  width: 100%;
  max-width: 500px;
  height: 48px;

  border: none;
  border-radius:10px;
  padding: 0 30px;
  color:#fff;

  &+&{
    margin-top: 8px;
  }
  transition: all ease-in-out 0.2s;
  &:focus{
    background: #3f3f3f;
    outline: none;
  }
}
`
