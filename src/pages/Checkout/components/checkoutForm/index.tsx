import { MapPinLine } from 'phosphor-react'
import {
  FormInput,
  LineOneInput,
  LineTwoInput,
  OptionalTag,
  StreetInput,
  TopForm,
  TopFormHeader,
  ZipInput,
  FormContainer,
} from './styles'

export function CheckoutForm() {
  return (
    <FormContainer>
      <h3>Complete seu pedido</h3>
      <TopForm>
        <TopFormHeader>
          <MapPinLine size={22} weight="regular" color="#C47F17" />
          <div>
            <h4>Endereço de Entrega</h4>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </TopFormHeader>
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
      </TopForm>
      <div>
        <header>
          <div>Dollar Sign</div>
          <h4>Pagamento</h4>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </header>
        <div>
          <div>
            <input type="radio" value="credit" />
            <label htmlFor="credit">Cartão de Crédito</label>
          </div>
          <div>
            <input type="radio" value="debit" />
            <label htmlFor="debit">Cartão de Débito</label>
          </div>{' '}
          <div>
            <input type="radio" value="cash" />
            <label htmlFor="cash">Dinheiro</label>
          </div>
        </div>
      </div>
      <div>
        <h4>Cafés selecionados</h4>
        <div>Confirmation card</div>
        <div>Confirmation card</div>
        <div>Price Confirmation</div>
      </div>
      <button>Confirmar pedido</button>
    </FormContainer>
  )
}
