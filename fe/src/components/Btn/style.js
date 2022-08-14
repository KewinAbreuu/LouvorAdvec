import styled from 'styled-components'

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;


.btnContinuar{
    width: 95%;
    max-width: 450px;
    height: 54px;

    display: flex;
    align-items: center;
    justify-content: center;

    /* position: absolute;
    bottom: 40px; */

    background: #fff;
    background: ${(props) => props.background};
    border: none;
    border-radius:20px;
    text-decoration: none;

    p{
      color:#222;
      color: ${(props) => props.color};
      font-weight: 300;
    }

  }
`
