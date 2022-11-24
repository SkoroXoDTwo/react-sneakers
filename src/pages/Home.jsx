import React from 'react';
import Card from '../components/Card/Card';
import CardLoader from '../components/CardLoader/CardLoader';
import Notice from '../components/Notice/Notice';
import { AppContext } from '../App';

const Home = ({
  searchValue,
  setSearchValue,
  onAddToBasket,
  onAddToFavorite,
  onChangeSearchInput,
  basketItems,
  isLoading
}) => {

  const { items } = React.useContext(AppContext);

  const filterItems = () => {
    return items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()));
  }

  const renderItem = (item, index) => {
    return (
      <Card
        key={index}
        onAdd={(obj) => onAddToBasket(obj)}
        onFavorite={(obj) => onAddToFavorite(obj)}
        basketItems={basketItems}
        listId={item.id}
        {...item}
      />
    )
  }

  const renderItems = () => {
    return (
      isLoading
        ? [...Array(8)].map((item, index) => <CardLoader key={index} />)
        : filterItems().length > 0
          ? filterItems().map((item, index) => renderItem(item, index))
          : <Notice
            title='Товаров не найдено =('
            text='Список товаров пуст'
            hasButton={false}
          />
    )
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
      <ul className={'cards__list ' + (filterItems().length > 0 || isLoading==true ? '' : 'cards__list_null')}>
        {renderItems()}
      </ul>
    </div>
  )
}

export default Home;
