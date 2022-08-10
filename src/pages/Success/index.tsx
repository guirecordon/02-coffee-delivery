import {
  FakeGradientBorder,
  SuccessContainer,
  SuccessLeftSide,
  SummaryPurchase,
} from './styles'

export function Success() {
  return (
    <SuccessContainer>
      <SuccessLeftSide>
        <h2>Uhu! Pedido Confirmado</h2>
        <h4>Agora é só aguardar que logo o café chegará até você</h4>
        <SummaryPurchase>
          <FakeGradientBorder>
            <div>
              <span>Icon</span>
              <div>
                <p>Previsão de entrega</p>
                <p>
                  <strong>20 min - 30 min</strong>
                </p>
              </div>
            </div>
            <div>
              <span>Icon</span>
              <div>
                <p>
                  Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                </p>
                <p>Farrapos - Porto Alegre, RS</p>
              </div>
            </div>
            <div>
              <span>Icon</span>
              <div>
                <p>Pagamento na entrega</p>
                <p>
                  <strong>Cartão de Crédito</strong>
                </p>
              </div>
            </div>
          </FakeGradientBorder>
        </SummaryPurchase>
      </SuccessLeftSide>
      <img src="src/assets/Illustration.svg" alt="" />
    </SuccessContainer>
  )
}
