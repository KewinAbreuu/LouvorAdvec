import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 166px;
  height: 120px;
  background: ${({ theme }) => theme.colors.primary.dark};
  border-radius: 20px;

  &+&{
    margin-left: 10px;
  }
`
