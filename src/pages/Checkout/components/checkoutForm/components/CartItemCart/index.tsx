import { Minus, Plus, Trash } from 'phosphor-react'
import { Counter } from '../../../../../Home/components/list/components/coffee-card/styles'
import {
  CartItem,
  CartItemCartContainer,
  CheckoutButton,
  CheckoutCartItemLeft,
  CheckoutCartMid,
  ItemPrice,
} from './styles'

export function CartItemCart() {
  return (
    <CartItemCartContainer>
      <CheckoutCartItemLeft>
        <img src="src/assets/coffee-cards/Type=Mochaccino.svg" alt="" />
        <CheckoutCartMid>
          <h4>Expresso Tradicional</h4>
          <CartItem>
            <Counter>
              <Minus size={14} /> <span>1</span> <Plus size={14} />
            </Counter>
            <CheckoutButton>
              <Trash size={16} color="#8047F8" />
              remover
            </CheckoutButton>
          </CartItem>
        </CheckoutCartMid>
      </CheckoutCartItemLeft>
      <ItemPrice>R$ 9,90</ItemPrice>
    </CartItemCartContainer>
  )
}
