import React, { useState } from 'react';
import './card.scss';

const Card = (props) => {

  const [isAdded, addCard] = useState(false);
  const [isLiked, likeCard] = useState(false);

  return (
    <li>
      <article className='card'>
        <div className='card__img-container'>
          <button className={'card__like-btn ' + (isLiked ? 'card__like-btn_active' : '')} onClick={ () => {likeCard(!isLiked);} }></button>
          <img className='card__img' src={props.linkImg} alt="Фоторграфия кроссовок"></img>
        </div>
        <h2 className='card__title'>{props.title}</h2>
        <div className='card__footer'>
          <div className='card__price-container'>
            <p className='card__price-title'>Цена:</p>
            <span className='card__price'>{props.price} руб.</span>
          </div>
          <button className={'card__add-btn ' + (isAdded ? 'card__add-btn_active' : '')} onClick={ () => {addCard(!isAdded);} }></button>
        </div>
      </article>
    </li>
  );
};

export default Card;
