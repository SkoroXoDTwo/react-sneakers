import './App.scss';
import Header from './components/Header/Header';
import Card from './components/Card/Card';

const cardsItems = [
  {
    linkImg: './images/card-item-1.jpg',
    title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: 12999
  },
  {
    linkImg: './images/card-item-2.jpg',
    title: 'Мужские Кроссовки Nike Air Max 270',
    price: 10999
  },
  {
    linkImg: './images/card-item-3.jpg',
    title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: 11999
  },
  {
    linkImg: './images/card-item-4.jpg',
    title: 'Кроссовки Puma X Aka Boku Future Rider',
    price: 8999
  }
]

function App() {
  return (
    <div className="page">
      <Header />
      <div className='cards'>
        <div className='cards__header'>
          <h1 className='cards__title'>Все кроссовки</h1>
          <div className='cards__search'>
            <img className='cards__search-icon' src='./images/cards-search-icon.svg' alt='кнопка поиска товаров' />
            <input className='cards__search-input' placeholder='Поиск...'></input>
          </div>
        </div>
        <ul className='cards__list'>
          {cardsItems.map((item) => (
            <Card
              linkImg={item.linkImg}
              title={item.title}
              price={item.price}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
