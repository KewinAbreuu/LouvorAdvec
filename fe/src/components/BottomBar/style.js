import styled from 'styled-components'

export const Container = styled.div`
  width: 95%;
  max-width: 480px;
  height: 70px;
  position: fixed;
  bottom: 20px;
  z-index: 5;
  border-radius: 50px;

  background-color: rgba(117,117,117,0.4);
  backdrop-filter: blur(10px);

  display:flex;
  justify-content: center;
  align-items: center;

  p{
    color: #fff;

  }

`
