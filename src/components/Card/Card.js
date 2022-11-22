import React, { useState } from 'react';
import { AppContext } from '../../App';
import './card.scss';

const Card = ({ id, linkImg, title, price, onAdd, onFavorite, favorited = false, basketItems = [] }) => {

  const { isItemAdded } = React.useContext(AppContext);
  const [isFavorite, setIsFavorite] = useState(favorited);



  const onClickAdd = () => {
    onAdd({ linkImg, title, price, id, listId: id });
  }

  const onClickFavorite = () => {
    onFavorite({ linkImg, title, price, id });
    setIsFavorite(!isFavorite);
  }

  return (
    <li>
      <article className='card'>
        <div className='card__img-container'>
          <button className={'card__like-btn ' + (isFavorite ? 'card__like-btn_active' : '')} onClick={onClickFavorite}></button>
          <img className='card__img' src={linkImg} alt="Фоторграфия кроссовок"></img>
        </div>
        <h2 className='card__title'>{title}</h2>
        <div className='card__footer'>
          <div className='card__price-container'>
            <p className='card__price-title'>Цена:</p>
            <span className='card__price'>{price} руб.</span>
          </div>
          <button className={'card__add-btn ' + (isItemAdded(id) ? 'card__add-btn_active' : '')} onClick={onClickAdd}></button>
        </div>
      </article>
    </li>
  );
};

export default Card;
