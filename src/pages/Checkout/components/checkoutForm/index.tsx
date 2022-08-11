import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Minus,
  Money,
  Plus,
  Trash,
} from 'phosphor-react'
import { CounterInput } from '../../../Home/components/list/components/coffee-card/styles'
import {
  FormInput,
  LineOneInput,
  LineTwoInput,
  OptionalTag,
  StreetInput,
  FormSection,
  FormHeader,
  ZipInput,
  FormContainer,
  PaymentSelectionHolder,
  PaymentButton,
  CheckoutButton,
  CartItem,
  ItemPrice,
  CartItemCart,
  CheckoutCartItemLeft,
  CheckoutCartMid,
  PriceItems,
  PriceCheckoutSection,
  PriceItemsTotal,
  SubmitButton,
  CheckoutBox,
} from './styles'

export function CheckoutForm() {
  return (
    <FormContainer>
      <div>
        <h3>Complete seu pedido</h3>
        <FormSection>
          <FormHeader>
            <MapPinLine size={22} weight="regular" color="#C47F17" />
            <div>
              <h4>Endereço de Entrega</h4>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </FormHeader>
          <ZipInput type="number" placeholder="CEP" />
          <StreetInput type="text" placeholder="Rua" />
          <LineOneInput>
            <FormInput type="number" placeholder="Número" />
            <FormInput type="text" placeholder="Complemento" />
            <OptionalTag>Opcional</OptionalTag>
          </LineOneInput>
          <LineTwoInput>
            <FormInput type="text" placeholder="Bairro" />
            <FormInput type="text" placeholder="Cidade" />
            <FormInput type="text" placeholder="UF" />
          </LineTwoInput>
        </FormSection>
        <FormSection>
          <FormHeader>
            <CurrencyDollar size={22} weight="regular" color="#8047F8" />

            <div>
              <h4>Pagamento</h4>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </FormHeader>
          <PaymentSelectionHolder>
            <PaymentButton>
              <input type="radio" value="credit" />
              <CreditCard size={16} color="#8047F8" />
              <label htmlFor="credit">Cartão de Crédito</label>
            </PaymentButton>
            <PaymentButton>
              <input type="radio" value="debit" />
              <Bank size={16} color="#8047F8" />
              <label htmlFor="debit">Cartão de Débito</label>
            </PaymentButton>{' '}
            <PaymentButton>
              <input type="radio" value="cash" />
              <Money size={16} color="#8047F8" />

              <label htmlFor="cash">Dinheiro</label>
            </PaymentButton>
          </PaymentSelectionHolder>
        </FormSection>
      </div>
      <div>
        <h3>Cafés selecionados</h3>
        <CheckoutBox>
          <div>
            <CartItemCart>
              <CheckoutCartItemLeft>
                <img src="src/assets/coffee-cards/Type=Mochaccino.svg" alt="" />
                <CheckoutCartMid>
                  <h4>Expresso Tradicional</h4>
                  <CartItem>
                    <CounterInput>
                      <Minus size={14} /> <span>1</span> <Plus size={14} />
                    </CounterInput>
                    <CheckoutButton>
                      <Trash size={16} color="#8047F8" />
                      remover
                    </CheckoutButton>
                  </CartItem>
                </CheckoutCartMid>
              </CheckoutCartItemLeft>
              <ItemPrice>R$ 9,90</ItemPrice>
            </CartItemCart>
            <CartItemCart>
              <CheckoutCartItemLeft>
                <img src="src/assets/coffee-cards/Type=Mochaccino.svg" alt="" />
                <CheckoutCartMid>
                  <h4>Expresso Tradicional</h4>
                  <CartItem>
                    <Counter>
                      <Minus size={14} /> <span>1</span> <Plus size={14} />
                    </Counter>
                    <CheckoutButton>
                      <Trash size={16} color="#8047F8" />
                      remover
                    </CheckoutButton>
                  </CartItem>
                </CheckoutCartMid>
              </CheckoutCartItemLeft>
              <ItemPrice>R$ 9,90</ItemPrice>
            </CartItemCart>
            <PriceCheckoutSection>
              <PriceItems>
                <p>Total de itens</p>
                <span>R$ 29,70</span>
              </PriceItems>
              <PriceItems>
                <p>Entrega</p>
                <span>R$ 3,50</span>
              </PriceItems>
              <PriceItemsTotal>
                <p>Total</p>
                <span>R$ 33,20</span>
              </PriceItemsTotal>
            </PriceCheckoutSection>
          </div>
          <SubmitButton>Confirmar pedido</SubmitButton>
        </CheckoutBox>
      </div>
    </FormContainer>
  )
}
