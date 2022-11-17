import React, { useState } from 'react';
import './card.scss';

const Card = ({key, linkImg, title, price, onAdd}) => {

  const [isAdded, addCardInBasket] = useState(false);
  const [isLiked, likeCard] = useState(false);

  const onClickAdd = () => {
    onAdd({linkImg, title, price});
    addCardInBasket(!isAdded);
  }

  return (
    <li>
      <article className='card'>
        <div className='card__img-container'>
          <button className={'card__like-btn ' + (isLiked ? 'card__like-btn_active' : '')} onClick={ () => {likeCard(!isLiked);} }></button>
          <img className='card__img' src={linkImg} alt="Фоторграфия кроссовок"></img>
        </div>
        <h2 className='card__title'>{title}</h2>
        <div className='card__footer'>
          <div className='card__price-container'>
            <p className='card__price-title'>Цена:</p>
            <span className='card__price'>{price} руб.</span>
          </div>
          <button className={'card__add-btn ' + (isAdded ? 'card__add-btn_active' : '')} onClick={onClickAdd}></button>
        </div>
      </article>
    </li>
  );
};

export default Card;
