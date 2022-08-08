export function CheckoutForm() {
  return (
    <form>
      <div>
        <h3>Complete seu pedido</h3>
        <header>
          <div>Pin</div>
          <h4>Endereço de Entrega</h4>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </header>
        <input type="number" placeholder="CEP" />
        <input type="text" placeholder="Rua" />
        <input type="number" placeholder="Número" />
        <input type="text" placeholder="Complemento" />
        <input type="text" placeholder="Bairro" />
        <input type="text" placeholder="Cidade" />
        <input type="text" placeholder="UF" />
      </div>
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
    </form>
  )
}
