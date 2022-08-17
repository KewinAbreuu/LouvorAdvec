import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 88px;
  display: flex;
  border-radius: 24px;
  background: #f00;

  &+&{
    margin-top:8px;
  }

  .date{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    width: 30%;
    height: 100%;
    background: #4f4f4f;

    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    border-right: solid 1px #52BA7C;

    h1{
      font-weight: 300;
      color: #fff;
      margin-top: 2px;
    }
  }

  .info{
    display:flex;
    flex-direction: column;
    width: 80%;
    height: 100%;
    padding: 8px 0 0 20px;
    background: #4f4f4f;

    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;

    h1{
       color:#fff;
    }
    p{
      font-size: 14px;
      color:#fff;
      margin-bottom: 12px;
    }
    h2{
      font-size: 14px;
      color:#52BA7C;
    }
  }

`
