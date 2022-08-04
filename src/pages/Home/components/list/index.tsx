import { CoffeeCard } from './components/coffee-card'

const coffeeList = [
  {
    id: 1,
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: '9.90',
    labels: ['tradicional'],
    imgURL: 'src/assets/coffee-cards/expresso-tradicional.svg',
  },
]

export function List() {
  return (
    <div>
      {coffeeList.map((coffee) => {
        return <CoffeeCard key={coffee.id} {...coffee} />
      })}
    </div>
  )
}
