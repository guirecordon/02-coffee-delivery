import styled from 'styled-components'

export const SuccessContainer = styled.div`
  margin-top: 106px;
  padding: 5rem 0;

  display: grid;
  grid-template-columns: 1fr 492px;
  gap: 6.375rem;
`

export const SuccessLeftSide = styled.div`
  h2 {
    color: ${(props) => props.theme['yellow-dark']};
    font-family: 'Baloo 2', cursive;
    font-size: 2rem;
    font-weight: 800;
    line-height: 1.3;
  }

  h4 {
    line-height: 1.3;
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
    font-weight: 400;
  }
`

export const SummaryPurchase = styled.div`
  margin-top: 2.5rem;
  padding: 1px;
  border: solid 1px ${(props) => props.theme.background};
  border-radius: 6px 36px / 6px 36px;
  background: linear-gradient(to right, #dbac2c, #8047f8);
  overflow: hidden;
`

export const FakeGradientBorder = styled.div`
  background: ${(props) => props.theme.background};
  padding: 2.5rem;
  border: solid 1px ${(props) => props.theme.background};
  border-radius: 6px 36px / 6px 36px;
`
