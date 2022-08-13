import styled from 'styled-components'
export const Body = styled.div`
  padding: 0 10px;

`
export const Header = styled.header`
  display:flex;
  justify-content: center;
  align-items: flex-start;
  padding: 32px 10px;
  margin-bottom: 8px;
  height:175px;
  background: linear-gradient(90deg, #31C96E 0%, #157C3F 80.73%);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  .menu{
    width: 25px;
  }

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
  height: 220px;
  background: #cdcdcd;
  border-radius:20px;
  margin-top: -80px;

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
    font-size: 24px;
    color:${({ theme }) => theme.colors.text.light}
  }
`

export const Container = styled.div`
  display:flex;
  width: 100%;
  justify-content: center;
  margin-top: 16px;
`
