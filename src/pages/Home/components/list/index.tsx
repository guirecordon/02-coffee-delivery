import { CoffeeCard } from './components/coffee-card'
import { ListContainer, ListTitle } from './styles'

const coffeeList = [
  {
    id: 1,
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: '9.90',
    labels: ['tradicional'],
    imgURL: 'src/assets/coffee-cards/Type=Expresso.svg',
  },
  {
    id: 2,
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: '9.90',
    labels: ['tradicional'],
    imgURL: 'src/assets/coffee-cards/Type=Americano.svg',
  },
  {
    id: 3,
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: '9.90',
    labels: ['tradicional'],
    imgURL: 'src/assets/coffee-cards/Type=Expresso Cremoso.svg',
  },
  {
    id: 4,
    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: '9.90',
    labels: ['tradicional', 'gelado'],
    imgURL: 'src/assets/coffee-cards/Type=Café Gelado.svg',
  },
  {
    id: 5,
    title: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: '9.90',
    labels: ['tradicional', 'com leite'],
    imgURL: 'src/assets/coffee-cards/Type=Café com Leite.svg',
  },
  {
    id: 6,
    title: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: '9.90',
    labels: ['tradicional', 'com leite'],
    imgURL: 'src/assets/coffee-cards/Type=Latte.svg',
  },
  {
    id: 7,
    title: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: '9.90',
    labels: ['tradicional', 'com leite'],
    imgURL: 'src/assets/coffee-cards/Type=Capuccino.svg',
  },
  {
    id: 8,
    title: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: '9.90',
    labels: ['tradicional', 'com leite'],
    imgURL: 'src/assets/coffee-cards/Type=Macchiato.svg',
  },
  {
    id: 9,
    title: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: '9.90',
    labels: ['tradicional', 'com leite'],
    imgURL: 'src/assets/coffee-cards/Type=Mochaccino.svg',
  },
  {
    id: 10,
    title: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: '9.90',
    labels: ['especial', 'com leite'],
    imgURL: 'src/assets/coffee-cards/Type=Chocolate Quente.svg',
  },
  {
    id: 11,
    title: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: '9.90',
    labels: ['especial', 'alcoólico', 'gelado'],
    imgURL: 'src/assets/coffee-cards/Type=Cubano.svg',
  },
  {
    id: 12,
    title: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: '9.90',
    labels: ['especial'],
    imgURL: 'src/assets/coffee-cards/Type=Havaiano.svg',
  },
  {
    id: 13,
    title: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: '9.90',
    labels: ['especial'],
    imgURL: 'src/assets/coffee-cards/Type=Árabe.svg',
  },
  {
    id: 14,
    title: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: '9.90',
    labels: ['especial', 'alcoólico'],
    imgURL: 'src/assets/coffee-cards/Type=Irlandês.svg',
  },
]

export function List() {
  return (
    <>
      <ListTitle>Nossos Cafés</ListTitle>
      <ListContainer>
        {coffeeList.map((coffee) => {
          return <CoffeeCard key={coffee.id} {...coffee} />
        })}
      </ListContainer>
    </>
  )
}