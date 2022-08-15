import { createContext, ReactNode, useState } from 'react'

interface CartItem {
  product: string
  quantity: number
  img: string
}

interface CartItemsContextProviderProps {
  children: ReactNode
}

export const CartItemsContext = createContext({} as any)

export function CartItemsContextProvider({
  children,
}: CartItemsContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  return (
    <CartItemsContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartItemsContext.Provider>
  )
}
