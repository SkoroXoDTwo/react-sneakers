import './App.scss';
import Header from './components/Header/Header';
import Basket from './components/Basket/Basket';
import Card from './components/Card/Card';
import React from 'react';

function App() {
  const [items, setItems] = React.useState([]);
  const [basketItems, setBasketItems] = React.useState([]);
  const [basketOpened, setBasketOpened] = React.useState(false);

  React.useEffect(() => {
    fetch('https://636d0228ab4814f2b275a28e.mockapi.io/react-sneakers')
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      setItems(json);
    });
  }, []);

  const onAddToBasket = (obj) => {
    console.log(obj);
    setBasketItems([...basketItems, obj]);
  };

  return (
    <div className="page">
      {basketOpened &&
        <Basket
          onClickCloseBtn={() => setBasketOpened(false)}
          items={basketItems}
          />}

      <Header onClickBasket={() => setBasketOpened(true)} />
      <div className='cards'>
        <div className='cards__header'>
          <h1 className='cards__title'>Все кроссовки</h1>
          <div className='cards__search'>
            <img className='cards__search-icon' src='./images/cards-search-icon.svg' alt='кнопка поиска товаров' />
            <input className='cards__search-input' placeholder='Поиск...'></input>
          </div>
        </div>
        <ul className='cards__list'>
          {
            items.map((item, index) =>
            <Card
              key={index}
              linkImg={item.linkImg}
              title={item.title}
              price={item.price}
              onAdd={(obj) => {onAddToBasket(obj)}}
            />)
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
