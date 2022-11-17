import './App.scss';
import React from 'react';
import axios from 'axios';
import Header from './components/Header/Header';
import Basket from './components/Basket/Basket';
import Card from './components/Card/Card';


function App() {
  const [items, setItems] = React.useState([]);
  const [basketItems, setBasketItems] = React.useState([]);
  const [basketOpened, setBasketOpened] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');

  React.useEffect(() => {
    axios.get('https://636d0228ab4814f2b275a28e.mockapi.io/items')
      .then((res) => {
        setItems(res.data);
      });

    axios.get('https://636d0228ab4814f2b275a28e.mockapi.io/basket')
      .then((res) => {
        setBasketItems(res.data);
      });
  }, []);

  const onAddToBasket = (obj) => {
    axios.post('https://636d0228ab4814f2b275a28e.mockapi.io/basket', obj);
    setBasketItems((prev) => [...prev, obj]);
  };

  const onRemoveToBasket = (id) => {
   axios.delete(`https://636d0228ab4814f2b275a28e.mockapi.io/basket/${id}`);
   setBasketItems((prev) => prev.filter(item => item.id !== id));
  };

  const onChangeSearchInput = (evt) => {
    setSearchValue(evt.target.value);
  }

  return (
    <div className="page">
      {basketOpened &&
        <Basket
          items={basketItems}
          onClickCloseBtn={() => setBasketOpened(false)}
          onRemoveItem={onRemoveToBasket}
        />}

      <Header onClickBasket={() => setBasketOpened(true)} />
      <div className='cards'>
        <div className='cards__header'>
          <h1 className='cards__title'>{searchValue ? `Поиск по запросу: ${searchValue}` : 'Все кроссовки'}</h1>
          <div className='cards__search'>
            <img className='cards__search-icon' src='./images/cards-search-icon.svg' alt='кнопка поиска товаров' />
            <input className='cards__search-input' placeholder='Поиск...' onChange={onChangeSearchInput} value={searchValue} />
            {searchValue && <button className='cards__search-btn' onClick={() => setSearchValue('')}></button>}
          </div>
        </div>
        <ul className='cards__list'>
          {
            items
              .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
              .map((item, index) =>
                <Card
                  key={index}
                  linkImg={item.linkImg}
                  title={item.title}
                  price={item.price}
                  onAdd={(obj) => { onAddToBasket(obj) }}
                />)
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
