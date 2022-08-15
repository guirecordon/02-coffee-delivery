import { HeaderContainer, Location, LocationWrap, Pin } from './styles'
import logo from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext, useEffect, useState } from 'react'
import { CartItemsContext } from '../../layouts/DefaultLayout'
import { NavLink } from 'react-router-dom'

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

        <NavLink to="/checkout">
          <ShoppingCart size={22} weight="fill" />
        </NavLink>
        <span>{cart}</span>
      </nav>
    </HeaderContainer>
  )
}
