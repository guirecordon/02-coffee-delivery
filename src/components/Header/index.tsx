import { HeaderContainer, Location, LocationWrap, Pin } from './styles'
import logo from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
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
      </nav>
    </HeaderContainer>
  )
}
