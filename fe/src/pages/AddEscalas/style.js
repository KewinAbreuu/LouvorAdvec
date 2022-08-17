import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 500px;
  padding: 0 16px;

  .title{
    margin-top: 24px;
  }

  h3{
    color:#fff;
    margin-bottom: 8px;
  }

  .contSelect{
    width: 100%;
    margin-top: 24px;

    select{
      width:100%;
      height:48px;
      background:#25A859;
      border:none;
      border-radius:10px;
      padding:8px;
      color:#fff;

      &:focus{
        outline: none;
      }
    }
  }
`
export const ContObs = styled.div`
  width: 100%;
  margin-top: 16px;

  input{
    width: 100%;
    height: 200px;
    padding: 0 16px;
    background: #cdcdcd;
    border:none;
    border-radius:20px;

    &:focus{
      outline:none;
      background: #fff;
    }
  }
`
