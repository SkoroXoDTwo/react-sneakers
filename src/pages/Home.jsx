import React from 'react';
import Card from '../components/Card/Card';

import { AppContext } from '../App';

function Home({ searchValue, setSearchValue, onAddToBasket, onAddToFavorite, onChangeSearchInput, basketItems, isLoading }) {
  const { items } = React.useContext(AppContext);

  const renderItems = () => {
    const filterItems = items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()));

    return (isLoading
      ?
        [...Array(8)].map((item, index) => <Card key={index} loading={isLoading} />)
      :
        filterItems.map((item, index) =>
          <Card
            key={index}
            onAdd={(obj) => onAddToBasket(obj)}
            onFavorite={(obj) => onAddToFavorite(obj)}
            basketItems={basketItems}
            listId={item.id}
            loading={isLoading}
            {...item}
          />))
  }

  return (
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
        {renderItems()}
      </ul>
    </div>
  )
}

export default Home;
