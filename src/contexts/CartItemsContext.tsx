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

  function handleReduceCount(itemQuantity: number) {
    if (itemQuantity > 0) {
      return itemQuantity - 1
    }
  }

  function handleAddCount(itemQuantity: number) {
    return itemQuantity + 1
  }

  useEffect(() => {
    const stateJSON = JSON.stringify(cartItems)

    localStorage.setItem('@coffee-delivery:cart-items-1.0.0', stateJSON)
  }, [cartItems])

  return (
    <CartItemsContext.Provider
      value={{
        cartItems,
        setCartItems,
        handleReduceCount,
        handleAddCount,
      }}
    >
      {children}
    </CartItemsContext.Provider>
  )
}
