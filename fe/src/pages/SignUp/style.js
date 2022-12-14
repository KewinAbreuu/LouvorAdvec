import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 24px;

  background: linear-gradient(180deg, #11A14B 0%, #157C3E 76.56%);

  form{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    margin-top: 48px;
  }

  input{
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
    margin-top: 8px;

    transition: all ease-in-out 0.2s;
    &:focus{
      background: #fff;
      outline: none;
    }
  }

  .btnAuth{
    background: #52BA7C;
    color:#fff;
    width: 95%;
    max-width: 500px;
    height: 48px;

    border: none;
    border-radius:20px;
    padding: 0 16px;
    margin-top: 16px;
    margin-bottom: 16px;

    cursor:pointer;

  }

`
