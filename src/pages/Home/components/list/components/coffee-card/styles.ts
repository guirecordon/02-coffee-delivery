import styled from 'styled-components'

export const CardContainer = styled.div`
  background: ${(props) => props.theme['base-card']};

  img {
    width: 120px;
  }
`

export const Labels = styled.p`
  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  font-size: 0.75rem;
  border-radius: 100px;
  text-transform: uppercase;
  padding: 0.25rem 0.5rem;
`

export const Title = styled.strong`
  color: ${(props) => props.theme['base-subtitle']};
  font-family: 'Baloo 2', cursive;
  font-weight: 700;
  line-height: 1.3;
  font-size: 1.25rem;
`

export const Description = styled.p`
  color: ${(props) => props.theme['base-label']};
  font-family: 'Roboto', sans-serif;
  font-size: 0.875rem;
  line-height: 1.3;
`

export const Price = styled.div`
  font-family: 'Baloo 2', cursive;
  color: ${(props) => props.theme['base-text']};
  font-size: 1.5rem;
  line-height: 1.3;
  font-weight: 800;

  span {
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
  }
`

export const Counter = styled.div`
  background: ${(props) => props.theme['base-button']};

  display: flex;
  align-items: center;
  justify-content: space-around;

  border-radius: 6px;
  color: ${(props) => props.theme.purple};

  span {
    color: ${(props) => props.theme['base-title']};
  }
`

export const BottomContainer = styled.div`
  display: flex;
  align-items: center;
`

export const IconContainer = styled.div`
  background: ${(props) => props.theme['purple-dark']};
  color: ${(props) => props.theme['base-card']};

  border-radius: 6px;
  padding: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
`
