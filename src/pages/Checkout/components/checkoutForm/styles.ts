import styled from 'styled-components'

export const FormContainer = styled.form`
  display: grid;
  grid-template-columns: 1fr 448px;
  gap: 2rem;

  h3 {
    font-size: 1.125rem;
    font-family: 'Baloo 2', cursive;
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 1rem;
  }
`

export const FormSection = styled.div`
  background: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  border-radius: 6px;
  margin-bottom: 0.75rem;
`

export const FormHeader = styled.header`
  display: flex;
  gap: 0.5rem;

  line-height: 1.3;
  margin-bottom: 2rem;

  h4 {
    font-size: 1rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-text']};
  }
`

const BaseInput = styled.input`
  height: 2.625rem;
  background: ${(props) => props.theme['base-input']};
  color: ${(props) => props.theme['base-text']};
  outline: none;
  border: solid 1px ${(props) => props.theme['base-button']};
  margin-bottom: 1rem;
  padding: 0.75rem;
  font-size: 0.875rem;
  line-height: 1.3;
  border-radius: 4px;
`

export const ZipInput = styled(BaseInput)`
  width: 200px;
  display: block;
`

export const FormInput = styled(BaseInput)``

export const StreetInput = styled(BaseInput)`
  display: block;
  width: 100%;
`

export const LineOneInput = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 1rem;
  position: relative;
`

export const LineTwoInput = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr 60px;
  gap: 1rem;
`

export const OptionalTag = styled.span`
  font-size: 0.75rem;
  font-style: italic;
  color: ${(props) => props.theme['base-label']};
  position: absolute;
  right: 1rem;
  top: 14px;
`

export const PaymentSelectionHolder = styled.div`
  padding: 1rem 0;
  display: flex;
  gap: 0.75rem;
`
export const PaymentButton = styled.div`
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  padding: 1rem;
  background: ${(props) => props.theme['base-button']};
  border: none;
  border-radius: 6px;
  color: ${(props) => props.theme['base-text']};
  font-size: 0.75rem;
  font-weight: 400;
  text-transform: uppercase;

  input {
    left: -999rem;
    position: absolute;
  }

  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }

  &:focus {
    border: solid 1px ${(props) => props.theme.purple};
  }
`

export const CheckoutButton = styled.button`
  background: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};
  text-transform: uppercase;
  font-size: 0.75rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  padding: 0.5rem;

  border: none;
  border-radius: 6px;

  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }
`

export const CartItem = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const ItemPrice = styled.div`
  font-weight: bold;
  color: ${(props) => props.theme['base-text']};
  font-size: 1rem;
  line-height: 1.3;
`

export const CartItemCart = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1.5rem 0;
  border-bottom: solid 1px ${(props) => props.theme['base-button']};
`

export const CheckoutCartItemLeft = styled.div`
  display: flex;
  gap: 1.25rem;

  img {
    width: 64px;
  }
`

const BasePriceItems = styled.div`
  display: flex;
  justify-content: space-between;
  line-height: 1.3;
  margin-top: 0.75rem;
`

export const PriceItems = styled(BasePriceItems)`
  p {
    font-size: 0.875rem;
  }
`

export const PriceItemsTotal = styled(BasePriceItems)`
  font-weight: bold;
  font-size: 1.25rem;
`

export const CheckoutCartMid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

export const PriceCheckoutSection = styled.div`
  padding: 1rem 0;
`

export const SubmitButton = styled.button`
  margin-top: 1.5rem;
  background: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};
  text-transform: uppercase;
  padding: 0.75rem;
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1.6;
  border: none;
  border-radius: 6px;
  width: 100%;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme['yellow-dark']};
  }
`

export const CheckoutBox = styled.div`
  padding: 2.5rem;
  background: ${(props) => props.theme['base-card']};
  border-radius: 2% 10% / 2% 10%;
`