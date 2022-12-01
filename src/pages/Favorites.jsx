import React from 'react';
import { AppContext } from '../contexts/AppContext';
import Card from '../components/Card/Card';
import Notice from '../components/Notice/Notice';

function Favorites({ onAddToFavorite, onAddToBasket }) {
  const { favorites } = React.useContext(AppContext);



  return (
    <div className='cards'>
      <div className='cards__header'>
        <h1 className='cards__title'>Мои закладки</h1>
      </div>
      {favorites.length > 0 ?
        <ul className='cards__list'>
          {
            favorites
              .map((item, index) =>
                <Card
                  key={index}
                  onAdd={(obj) => onAddToBasket(obj)}
                  onFavorite={(obj) => onAddToFavorite(obj)}
                  favorited={true}
                  {...item}
                />)
          }
        </ul>
        :
        <Notice
          title='Закладок нет :('
          text='Вы ничего не добавляли в закладки'
          hasButton={true}
        />
      }

    </div>
  )
}

export default Favorites;
