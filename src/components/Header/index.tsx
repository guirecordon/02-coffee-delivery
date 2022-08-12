import { HeaderContainer, Location, LocationWrap, Pin } from './styles'
import logo from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext, useEffect, useState } from 'react'
import { CartItemsContext } from '../../layouts/DefaultLayout'

export function Header() {
  const { cartItems } = useContext(CartItemsContext)
  const [cart, setCart] = useState(0)

  useEffect(() => {
    if (cartItems) {
      const newCart = cartItems.reduce((acc: any, currVal: any) => {
        acc += currVal.quantity
        return acc
      }, 0)

      setCart(newCart)
      console.log(cart)
    }
  }, [cartItems, cart])

  return (
    <HeaderContainer>
      <img src={logo} alt="" />
      <nav>
        <LocationWrap>
          <Pin>
            <MapPin size={22} weight="fill" />
          </Pin>
          <Location>Porto Alegre, RS</Location>
        </LocationWrap>

        <a href="">
          <ShoppingCart size={22} weight="fill" />
        </a>
        <span>{cart}</span>
      </nav>
    </HeaderContainer>
  )
}
