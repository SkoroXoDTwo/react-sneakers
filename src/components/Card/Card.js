import React, { useState } from 'react';
import { AppContext } from '../../App';
import './card.scss';

const Card = ({ id, linkImg, title, price, onAdd, onFavorite, listId }) => {

  const { isItemAdded } = React.useContext(AppContext);
  const { isItemFavorite } = React.useContext(AppContext);
  const { favorites } = React.useContext(AppContext);

  const onClickAdd = () => {
    onAdd({ linkImg, title, price, id, listId: id });
  }
  const onClickFavorite = () => {
    console.log(listId);
    onFavorite({ linkImg, title, price, id, listId });
  }

  return (
    <li>
      <article className='card'>
        <div className='card__img-container'>
          <button className={'card__like-btn ' + (isItemFavorite(listId) ? 'card__like-btn_active' : '')} onClick={onClickFavorite}></button>
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
