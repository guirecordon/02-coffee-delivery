import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import {
  CardContainer,
  Labels,
  Title,
  Description,
  Price,
  Counter,
  BottomContainer,
  IconContainer,
} from './styles'

interface CoffeeListProps {
  title: string
  description: string
  price: string
  labels: string[]
  imgURL: string
}

export function CoffeeCard({
  title,
  description,
  price,
  labels,
  imgURL,
}: CoffeeListProps) {
  return (
    <CardContainer>
      <img src={imgURL} alt="" />
      {labels.map((label) => (
        <Labels key={label}>label</Labels>
      ))}
      <Title>{title}</Title>
      <Description>{description}</Description>
      <BottomContainer>
        <Price>
          <span>R$ </span>
          {price}
        </Price>
        <div>
          <Counter>
            <Minus size={14} /> <span>1</span> <Plus size={14} />
          </Counter>
        </div>
        <IconContainer>
          <ShoppingCart size={22} weight="fill" />
        </IconContainer>
      </BottomContainer>
    </CardContainer>
  )
}
