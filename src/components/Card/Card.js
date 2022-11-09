import React from 'react';
import './card.scss';

const Card = (props) => {
  return (
    <li>
      <article className='card'>
        <div className='card__img-container'>
          <button className='card__like-btn'></button>
          <img className='card__img' src={props.linkImg}></img>
        </div>
        <h2 className='card__title'>{props.title}</h2>
        <div className='card__footer'>
          <div className='card__price-container'>
            <p className='card__price-title'>Цена:</p>
            <span className='card__price'>{props.price} руб.</span>
          </div>
          <button className='card__add-btn'></button>
        </div>
      </article>
    </li>
  );
};

export default Card;
