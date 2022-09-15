import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  flex-direction: column;

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

  .image{
    display:flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    width: 100%;
    height:70%;
    background:#cdcdcd;

    img{
      border-radius: 10px 10px 0px 0px;
      width:100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .info{
    width: 100%;
    margin-top:8px;
    padding-left: 10px;

    h1{
      color: #fff;
       user-select:none;

    }

    p{
      color:#cdcdcd;
      margin-top: 4px;
      font-size: 12px;
      user-select:none;

    }
  }

  .BtnDelete{
    width: 100%;
    height: 30px;
    background: #D83434;
    border: 0;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    color:#fff;
    margin-top: 10px;

    :focus{
      outline: none;
    }
    :hover{
      background-color: #D82525;
    }
    :active{
      background-color: #D82525;
    }
  }

`
