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
    margin-right: -35px;
    z-index: 5;
  }

  input{
  background: #d1d1d1;
  width: 100%;
  max-width: 500px;
  height: 48px;

  border: none;
  border-radius:20px;
  padding: 0 50px;

  &+&{
    margin-top: 8px;
  }
  transition: all ease-in-out 0.2s;
  &:focus{
    background: #fff;
    outline: none;
  }
}
`
