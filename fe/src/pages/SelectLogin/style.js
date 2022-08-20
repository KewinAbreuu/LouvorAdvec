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
    .containerBtn2{
      width: 100%;
      margin-bottom: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .btnContinuar{
    width: 95%;
    max-width: 450px;
    height: 54px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: #fff;
    background: ${(props) => props.background};
    border: none;
    border-radius:20px;
    text-decoration: none;

    p{
      color:#222;
      color: ${(props) => props.color};
      font-weight: 300;
    }

  }

  .btnContinuar2{
    width: 95%;
    max-width: 450px;
    height: 54px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: #52BA7C;
    background: ${(props) => props.background};
    border: none;
    border-radius:20px;
    text-decoration: none;
    color:#fff;
    cursor:pointer;

    p{
      color:#222;
      color: ${(props) => props.color};
      font-weight: 300;
    }

  }
`
