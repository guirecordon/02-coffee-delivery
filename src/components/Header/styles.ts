import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: fixed;
  top: 0;
  width: 70rem;
  padding: 2rem 0;
  background: ${(props) => props.theme.background};

  nav {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  a {
    display: flex;
    align-items: center;
    color: ${(props) => props.theme['yellow-dark']};
    background: ${(props) => props.theme['yellow-light']};
    padding: 0.625rem 0.5rem;
    border-radius: 6px;
  }
`

export const LocationWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.25rem;
  padding: 0.625rem 0.5rem;
  border-radius: 6px;

  background: ${(props) => props.theme['purple-light']};
`

export const Pin = styled.div`
  color: ${(props) => props.theme.purple};

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Location = styled.div`
  color: ${(props) => props.theme['purple-dark']};
  font-size: 0.875rem;
`
