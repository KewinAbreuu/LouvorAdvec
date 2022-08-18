import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  height: 72px;

  display:flex;
  justify-content: flex-start;
  align-items: center;

  padding:0 8px;
  cursor: pointer;

  margin-bottom: 24px;

  img{
    width: 32px;
    transition: all ease-in-out 0.2s;

    &:hover{
      transform: scale(1.1);
    }

  }

  h1{
    color: #fff;
    margin:0 24px;
  }
`
