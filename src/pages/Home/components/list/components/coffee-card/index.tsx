import { useForm } from 'react-hook-form'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import {
  CardContainer,
  Labels,
  Title,
  Description,
  Price,
  BottomContainer,
  IconContainer,
  BottomShopping,
  LabelContainer,
  CounterInput,
  PositionAbsoluteDiv,
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
  const { register, handleSubmit } = useForm()

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
          <CounterInput
            type="number"
            placeholder="0"
            {...register('counterInput')}
          />
          <PositionAbsoluteDiv>
            <Minus size={16} color="#8047F8" />

            <Plus size={16} color="#8047F8" />
          </PositionAbsoluteDiv>
          <IconContainer>
            <ShoppingCart size={22} weight="fill" />
          </IconContainer>
        </BottomShopping>
      </BottomContainer>
    </CardContainer>
  )
}
