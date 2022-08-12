import { createContext, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { LayoutContainer } from './styles'

interface CartItem {
  product: string
  quantity: number
  img: string
}

// interface CartItemsContextType {
//   cartItems: CartItem | undefined
// }

export const CartItemsContext = createContext({} as any)

export function DefaultLayout() {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  return (
    <LayoutContainer>
      <CartItemsContext.Provider value={{ cartItems, setCartItems }}>
        <Header />
        <Outlet />
      </CartItemsContext.Provider>
    </LayoutContainer>
  )
}
