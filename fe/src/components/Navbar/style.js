import styled from 'styled-components'

export const Content = styled.div`
  width: 100%;
  width: ${({ value }) => value === false && '0'};
  max-width: 500px;
  min-height:100vh;
  position: fixed;
  display: flex;
  flex-direction: row;
  z-index: 2;



`

export const ContainerOverlay = styled.div`
  width: 100%;
  width: ${({ value }) => value === false && '0'};
  max-width: 500px;
  min-height:100vh;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  background: ${({ value }) => value === false && 'transparent'};
  z-index: 2;
`
export const Container = styled.div`
  width: 310px;
  min-height:100vh;
  background: #222;
  z-index: 3;
  border-left: 1px solid #000;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0 10px 0 10px;

  transition: all ease-in-out 0.2s;

  transform: translateX(-1000px);
  transform: ${({ value }) => value === true && 'translateX(0)'};

  .ContentPerfil{
    width:100%;
    display:flex;
    flex-direction: column;
    padding: 20px 0px 20px 0px;
    margin-bottom: 16px;

    .arrow{
      margin: 0 auto;
    }
  }

  .ContainerPerfil{
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    padding: 10px;
    background: #303030;
    border: 0.0.5px solid #cdcdcd;
    border-radius: 50px;

    transition: all ease-in-out 0.3s;

    img{
      width: 50px;
      height: 50px;
      object-fit: cover;
      border-radius: 50%;
    }

    :hover{
      background:#383838;
    }
  }

  .ContainerPerfilInfos{
    margin-left: 16px;
    h3{
      color:#fff;
    }

    p{
      max-width: 18ch;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: #ddd;
    }
  }

  .Links{
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 32px;

    img{
      width: 30px;
      margin-left: 24px;
    }

    h4{
      color:#fff;
      margin-left: 24px;
    }

    :hover{
      h4{
        color:#cdcdcd;
      }
    }
  }

  .Ministerio{
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    margin-bottom: 32px;
    border: 0.5px solid #cdcdcd;
    border-radius: 10px;
    padding: 0 8px;


    img{
      width: 45px;
      margin-right: 24px;
    }

    h4{
      color:#fff;
    }

    p{
      color:#fff;
    }
  }

  .Sair{
    width: 65%;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items:center;
    background: linear-gradient(90deg, #11A34B 0%, #157C3F 80.73%);
    color:#fff;
    position: absolute;
    bottom: 24px;
    border-radius: 30px;

    :hover{
      background: #157C3F;
    }

    :active{
      background: #157C3F;
    }
  }

`
