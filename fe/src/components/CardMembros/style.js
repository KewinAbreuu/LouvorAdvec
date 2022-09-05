import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 80px;
  display: flex;

  border-radius: 10px;
  background: #292929;

  transition: all ease-in-out 0.1s;
  cursor:pointer;

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
      border: 1.5px solid  ${(props) => props.toggle === 0 ? '#f00' : '#1B8D49'};

    }
  }

  .info{
    display:flex;
    justify-content: center;
    flex-direction: column;
    width: 60%;
    height: 100%;
    padding: 8px 0 0 10px;


    h1{
       color:#fff;
    }
    p{
      font-size: 14px;
      color:#cdcdcd;
      margin-bottom: 12px;
    }
    h2{
      font-size: 14px;
      color:#52BA7C;
    }

    .titulo{
      margin-top: 2px;
      max-width: 15ch;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  .MaisInfo{
    display:flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
    padding: 8px 0 0 10px;

    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;

    p{
      color:#fff;
      font-size: 14px;
    }
    .BtnOnOff{
      width: 90px;
      height: 35px;
      border:0;
      border-radius: 10px;
      margin-right: 10px;
      background: #1B8D49;
      background: ${(props) => props.toggle === 1 ? '#191919' : '#1B8D49'};
      color:#fff;
    }

    .BtnLider{
      width: 90px;
      height: 35px;
      border:0;
      border-radius: 10px;
      margin-right: 10px;
      background: #1B8D49;
      background: ${(props) => props.adm === 1 ? '#B8860B' : '#191919'};
      color:#fff;

    }
  }

`
