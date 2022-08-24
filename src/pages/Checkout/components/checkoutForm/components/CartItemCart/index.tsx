import { Minus, Plus, Trash } from 'phosphor-react'
import { useContext, useEffect } from 'react'
import { CartItemsContext } from '../../../../../../contexts/CartItemsContext'
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

export function CartItemCart({ id, quantity }: CartItemsProps) {
  const {
    increaseCartQuantity,
    decreaseCartQuantity,
    updateCartQuantity,
    cartItems,
  } = useContext(CartItemsContext)

  useEffect(() => {
    updateCartQuantity()
  }, [cartItems, updateCartQuantity])

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
                <Minus size={14} onClick={() => decreaseCartQuantity(id)} />{' '}
                <span>{quantity}</span>{' '}
                <Plus size={14} onClick={() => increaseCartQuantity(id)} />
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
