import styled from 'styled-components'

export const Header = styled.header`
  display:flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
  margin-bottom: 8px;

  .title{
    margin: 0 auto;
  }

  h1{
    font-weight: bold;
    color: ${({ theme }) => theme.colors.text.light};
  }

  img{
    width:40px;
  }
`

export const Banner = styled.div`
  width: 100%;
  height: 280px;
  background: #cdcdcd;
  border-radius:20px;

  img{
    width:100%;
    height:100%;
    object-fit: cover;
    border-radius:20px;

  }
`
export const Welcomme = styled.div`
  margin-top: 16px;

  p{
    font-weight: 300;
    color:${({ theme }) => theme.colors.text.light}
  }
`

export const Container = styled.div`
  display:flex;
  width: 100%;
  /* height: 106px; */
  justify-content: center;
  margin-top: 16px;
`
