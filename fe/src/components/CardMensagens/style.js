import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 80px;
  display: flex;

  border-radius: 10px;
  background: #292929;

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

  .perfil{
    display:flex;
    flex-direction: column;
    justify-content: center;
    /* align-items:center; */
    padding-left: 8px;
    width: 18%;
    height: 100%;

    img{
      width: 50px;
      height: 50px;
      object-fit: cover;
      border-radius: 50%;
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
      color:#cdcdcd;
      margin-bottom: 12px;
      user-select:none;

    }
    h2{
      font-size: 14px;
      color:#52BA7C;
      user-select:none;

    }

    .titulo{
      margin-top: 2px;
      max-width: 15ch;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      user-select:none;

    }
  }

  .MaisInfo{
    display:flex;
    justify-content: center;
    width: 10%;
    height: 100%;
    padding: 8px 0 0 10px;

    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;

    p{
      color:#fff;
      font-size: 14px;
      user-select:none;

    }

  }

`
