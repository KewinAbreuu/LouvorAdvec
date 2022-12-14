import styled from 'styled-components'

export const Input = styled.input`
  background: #d1d1d1;
  background: ${(props) => props.background};
  width: 100%;
  max-width: 500px;
  height: 48px;

  border: none;
  border-radius:20px;
  border-radius:${(props) => props.border};
  padding: 0 16px;
  color:#222;
  color:${(props) => props.color};

  &+&{
    margin-top: 8px;
  }
  transition: all ease-in-out 0.2s;
  &:focus{
    background: #fff;
    outline: none;
  }
`
