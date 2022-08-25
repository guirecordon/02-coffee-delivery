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
  SubmitButton,
  CheckoutBox,
  RadioInput,
  AddBorderComponent,
} from './styles'
import { useContext } from 'react'
import { CartItemsContext } from '../../../../contexts/CartItemsContext'
import { CartItemCart } from './components/CartItemCart'
import { PriceCheckoutSection } from './components/PriceCheckoutSection'
import { useForm } from 'react-hook-form'

export function CheckoutForm() {
  const { cartItems } = useContext(CartItemsContext)
  const { register, handleSubmit, watch } = useForm()

  function handlePostNewOrder(data: any) {
    console.log(data)
  }

  const radioInput = watch('paymentMethod')

  return (
    <FormContainer onSubmit={handleSubmit(handlePostNewOrder)}>
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
          <ZipInput type="number" placeholder="CEP" {...register('zipcode')} />
          <StreetInput type="text" placeholder="Rua" {...register('street')} />
          <LineOneInput>
            <FormInput
              type="number"
              placeholder="Número"
              {...register('number')}
            />
            <FormInput
              type="text"
              placeholder="Complemento"
              {...register('complement')}
            />
            <OptionalTag>Opcional</OptionalTag>
          </LineOneInput>
          <LineTwoInput>
            <FormInput
              type="text"
              placeholder="Bairro"
              {...register('district')}
            />
            <FormInput type="text" placeholder="Cidade" {...register('city')} />
            <FormInput type="text" placeholder="UF" {...register('state')} />
          </LineTwoInput>
        </FormSection>
        <FormSection>
          <FormHeader>
            <CurrencyDollar size={22} weight="regular" color="#8047F8" />

            <div>
              <h4>Pagamento</h4>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja
                utilizar
              </p>
            </div>
          </FormHeader>
          <PaymentSelectionHolder>
            <PaymentButton>
              {radioInput === 'credit' && <AddBorderComponent />}
              <RadioInput
                type="radio"
                value="credit"
                {...register('paymentMethod')}
              />
              <CreditCard size={16} color="#8047F8" />
              Cartão de Crédito
            </PaymentButton>
            <PaymentButton>
              {radioInput === 'debit' && <AddBorderComponent />}
              <RadioInput
                type="radio"
                value="debit"
                {...register('paymentMethod')}
              />
              <Bank size={16} color="#8047F8" />
              Cartão de Débito
            </PaymentButton>{' '}
            <PaymentButton>
              {radioInput === 'cash' && <AddBorderComponent />}
              <RadioInput
                type="radio"
                value="cash"
                {...register('paymentMethod')}
              />
              <Money size={16} color="#8047F8" />
              Dinheiro
              <label htmlFor="cash"></label>
            </PaymentButton>
          </PaymentSelectionHolder>
        </FormSection>
      </div>
      <div>
        <h3>Cafés selecionados</h3>
        <CheckoutBox>
          <div>
            {cartItems &&
              cartItems.map((item: any) => (
                <CartItemCart key={item.id} {...item} />
              ))}
            <PriceCheckoutSection />
          </div>
          <SubmitButton>Confirmar pedido</SubmitButton>
        </CheckoutBox>
      </div>
    </FormContainer>
  )
}
