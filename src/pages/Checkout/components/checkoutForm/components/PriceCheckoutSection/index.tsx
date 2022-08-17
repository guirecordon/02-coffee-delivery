import {
  PriceCheckoutSectionContainer,
  PriceItems,
  PriceItemsTotal,
} from './styles'

export function PriceCheckoutSection({ total }: any) {
  return (
    <PriceCheckoutSectionContainer>
      <PriceItems>
        <p>Total de itens</p>
        <span>R$ {total}</span>
      </PriceItems>
      <PriceItems>
        <p>Entrega</p>
        <span>R$ 3,50</span>
      </PriceItems>
      <PriceItemsTotal>
        <p>Total</p>
        <span>R$ {total + 3.5}</span>
      </PriceItemsTotal>
    </PriceCheckoutSectionContainer>
  )
}
