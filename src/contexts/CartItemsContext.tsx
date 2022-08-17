import { createContext, ReactNode, useEffect, useState } from 'react'

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

  useEffect(() => {
    const stateJSON = JSON.stringify(cartItems)

    localStorage.setItem('@coffee-delivery:cart-items-1.0.0', stateJSON)
  }, [cartItems])

  return (
    <CartItemsContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartItemsContext.Provider>
  )
}
