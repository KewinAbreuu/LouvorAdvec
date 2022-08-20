import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 500px;
  padding: 0 16px;

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

  .contSelect2{
    width: 100%;
    margin-top: 24px;

    select{
      width:100%;
      height:48px;
      background:#4f4f4f;
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
