import React from 'react';
import { AppContext } from '../App';
import Card from '../components/Card/Card';
function Favorites({ onAddToFavorite }) {
  const state = React.useContext(AppContext);
  const { favorites } = React.useContext(AppContext);

  return (
    <div className='cards'>
      <div className='cards__header'>
        <h1 className='cards__title'>Мои закладки</h1>

        <div className='cards__search'>
          <img className='cards__search-icon' src='./images/cards-search-icon.svg' alt='кнопка поиска товаров' />
        </div>
      </div>
      <ul className='cards__list'>
        {
          favorites
            .map((item, index) =>
              <Card
                key={index}
                onFavorite={(obj) => onAddToFavorite(obj)}
                favorited={true}
                {...item}
              />)
        }
      </ul>
    </div>
  )
}

export default Favorites;
