import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 80px;
  display: flex;

  border-radius: 10px;
  background: #303030;

  transition: all ease-in-out 0.1s;
  cursor:pointer;

:hover{
  background: #333;
}

:active{
  background: #333;
}

  &+&{
    margin-top:8px;
  }

  img{
    width: 20px;
  }

  .date{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    width: 20%;
    height: 100%;


    h1{
      font-weight: 300;
      color: #fff;
      margin-top: 2px;
    }


  }

  .info{
    display:flex;
    justify-content: center;
    flex-direction: column;
    width: 80%;
    height: 100%;
    padding: 8px 0 0 10px;

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

  .maisInfo{
    display:flex;
    justify-content: center;
    flex-direction: column;
    width: 20%;
    height: 100%;
    padding: 8px 0 0 10px;

  }

`
