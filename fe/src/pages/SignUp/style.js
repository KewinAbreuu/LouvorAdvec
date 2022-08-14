import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 24px;

  background: linear-gradient(180deg, #11A14B 0%, #157C3E 76.56%);

  .groupBtn{
    width: 100%;
    position: absolute;
    bottom: 24px;
  }

  select{
    width: 100%;
    height: 45px;
    border: none;
    padding: 0 10px;
    background: #d9d9d9;
    border-radius:10px;
    margin-top: 40px;
    margin-bottom: 150px;

    &:focus{
      outline: none;
    }

  }
  .containerBtn{
      width: 100%;
      margin-bottom: 10px;
    }
`
