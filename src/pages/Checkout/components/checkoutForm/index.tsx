import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
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
        <div>
          <h4>Cafés selecionados</h4>
          <div>Confirmation card</div>
          <div>Confirmation card</div>
          <div>Price Confirmation</div>
        </div>
        <button>Confirmar pedido</button>
      </div>
    </FormContainer>
  )
}
