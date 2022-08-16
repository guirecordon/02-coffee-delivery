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

interface CartItemsProps {
  product: string
  quantity: number
  img: string
}

export function CartItemCart({ product, quantity, img }: CartItemsProps) {
  return (
    <CartItemCartContainer>
      <CheckoutCartItemLeft>
        <img src={img} alt="" />
        <CheckoutCartMid>
          <h4>{product}</h4>
          <CartItem>
            <Counter>
              <Minus size={14} /> <span>{quantity}</span> <Plus size={14} />
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
