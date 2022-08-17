import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useState } from 'react'
import {
  CardContainer,
  Labels,
  Title,
  Description,
  Price,
  Counter,
  BottomContainer,
  IconContainer,
  BottomShopping,
  LabelContainer,
} from './styles'

interface CoffeeListProps {
  id: number
  title: string
  description: string
  price: string
  labels: string[]
  imgURL: string
  onAddOrder: (
    id: number,
    quantity: number,
    title: string,
    imgURL: string,
    price: string,
  ) => void
}

export function CoffeeCard({
  id,
  title,
  description,
  price,
  labels,
  imgURL,
  onAddOrder,
}: CoffeeListProps) {
  const [itemQuantity, setItemQuantity] = useState(0)

  function handleReduceCount() {
    if (itemQuantity > 0) {
      setItemQuantity(itemQuantity - 1)
    }
  }

  function handleAddCount() {
    setItemQuantity(itemQuantity + 1)
  }

  return (
    <CardContainer>
      <img src={imgURL} alt="" />
      <LabelContainer>
        {labels.map((label) => (
          <Labels key={label}>{label}</Labels>
        ))}
      </LabelContainer>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <BottomContainer>
        <Price>
          <span>R$ </span>
          {price}
        </Price>
        <BottomShopping>
          <Counter>
            <Minus size={14} onClick={handleReduceCount} />{' '}
            <span>{itemQuantity}</span>{' '}
            <Plus size={14} onClick={handleAddCount} />
          </Counter>
          <IconContainer
            onClick={() => onAddOrder(id, itemQuantity, title, imgURL, price)}
          >
            <ShoppingCart size={22} weight="fill" />
          </IconContainer>
        </BottomShopping>
      </BottomContainer>
    </CardContainer>
  )
}
