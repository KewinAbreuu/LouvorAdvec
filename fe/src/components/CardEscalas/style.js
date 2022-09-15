import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 120px;
  display: flex;

  border-radius: 30px;
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

  .date{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    width: 35%;
    height: 100%;

    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    border-right: solid 0.2px #cdcdcd;

    h1{
      font-weight: 300;
      color: #fff;
      margin-top: 2px;
      user-select:none;

    }
  }

  .info{
    display:flex;
    justify-content: center;
    flex-direction: column;
    width: 60%;
    height: 100%;
    padding: 8px 0 0 10px;
/*
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px; */

    h1{
       color:#fff;
    user-select:none;

    }
    p{
      font-size: 14px;
      color:#fff;
      margin-bottom: 12px;
    user-select:none;

    }
    h2{
      font-size: 14px;
      color:#52BA7C;
    user-select:none;

    }
  }

  .MaisInfo{
    display:flex;
    justify-content: center;
    align-items: center;
    width: 20%;
    height: 100%;
    padding: 8px 0 0 10px;

    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;

    img{
      width: 20px;
    }
  }

`
