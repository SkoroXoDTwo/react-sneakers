import './App.scss';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import React from 'react';

function App() {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    fetch('https://636d0228ab4814f2b275a28e.mockapi.io/react-sneakers')
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      setItems(json);
    });
  }, []);


  return (
    <div className="page">

      <div className='basket'>
        <div className='basket__container'>
          <div className='basket__header'>
            <h2 className='basket__title'>Корзина</h2>
            <button className='basket__close-btn'></button>
          </div>
        </div>
      </div>

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
          {
            items.map((item, index) =>
            <Card
              key={index}
              linkImg={item.linkImg}
              title={item.title}
              price={item.price}
            />)
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
