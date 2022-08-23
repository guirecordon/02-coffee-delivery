import { Minus, Plus, Trash } from 'phosphor-react'
import coffeeList from '../../../../../../data/coffeeList.json'
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
  id: number
  quantity: number
}

// interface checkoutItemProps {
//   id: number
//   title: string
//   description: string
//   price: string
//   labels: string[]
//   imgURL: string
// }

export function CartItemCart({ id, quantity }: CartItemsProps) {
  const checkoutItem = coffeeList.find((item: any) => {
    return item.id === id
  })

  if (!checkoutItem) return null

  if (checkoutItem) {
    return (
      <CartItemCartContainer>
        <CheckoutCartItemLeft>
          <img src={checkoutItem?.imgURL} alt="" />
          <CheckoutCartMid>
            <h4>{checkoutItem?.title}</h4>
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
}
