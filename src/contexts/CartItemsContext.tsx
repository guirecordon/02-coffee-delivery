import { createContext, ReactNode, useState } from 'react'

interface CartItem {
  id: number
  quantity: number
}

interface CartItemsContextProviderProps {
  children: ReactNode
}

type CartItemsContextType = {
  cartItems: CartItem[]
  getItemQuantity: (id: number) => number
  increaseCartQuantity: (id: number) => void
  decreaseCartQuantity: (id: number) => void
  // addToCart: (id: number) => void
}

export const CartItemsContext = createContext({} as CartItemsContextType)

export function CartItemsContextProvider({
  children,
}: CartItemsContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  function getItemQuantity(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0
  }

  function increaseCartQuantity(id: number) {
    const matchFound = cartItems.find((item) => item.id === id)

    if (!matchFound) {
      setCartItems([...cartItems, { id, quantity: 1 }])
    } else {
      const updatedItemsArr = cartItems.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 }
        } else {
          return item
        }
      })
      setCartItems(updatedItemsArr)
    }
  }

  function decreaseCartQuantity(id: number) {
    const matchFound = cartItems.find((item) => item.id === id)

    if (matchFound && matchFound.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== id))
    } else {
      const updatedItemsArr = cartItems.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity - 1 }
        } else {
          return item
        }
      })
      setCartItems(updatedItemsArr)
    }
  }

  // function handleReduceCount(itemQuantity: number) {
  //   if (itemQuantity > 0) {
  //     return itemQuantity - 1
  //   }
  // }

  // function handleAddCount(itemQuantity: number) {
  //   return itemQuantity + 1
  // }

  // useEffect(() => {
  //   const stateJSON = JSON.stringify(cartItems)

  //   localStorage.setItem('@coffee-delivery:cart-items-1.0.0', stateJSON)
  // }, [cartItems])

  return (
    <CartItemsContext.Provider
      value={{
        cartItems,
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        // setCartItems,
        // handleReduceCount,
        // handleAddCount,
      }}
    >
      {children}
    </CartItemsContext.Provider>
  )
}
