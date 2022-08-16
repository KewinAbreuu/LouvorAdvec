import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  padding: 0 24px;

  background: linear-gradient(180deg, #11A14B 0%, #157C3E 76.56%);

  .btnSelect1{
    width: 95%;
    max-width: 450px;
    height: 56px;
    background-color: #fff;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    color:#222;
    position: absolute;
    bottom: 24px;
    border-radius: 20px;
    border: none;
    cursor: pointer;
  }

  .btnSelect2{
    width: 95%;
    max-width: 450px;
    height: 56px;
    background-color: #52BA7C;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    color:#fff;
    position: absolute;
    bottom: 24px;
    border-radius: 20px;
    border: none;
    cursor: pointer;
  }

  select{
    width: 100%;
    height: 45px;
    border: none;
    padding: 0 10px;
    background: #d9d9d9;
    border-radius:10px;
    margin-top: 40px;

    &:focus{
      outline: none;
    }
  }





`
