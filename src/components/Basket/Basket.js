import React from 'react';
import './basket.scss';

const Basket = (props) => {

  console.log(props.basketOpened);
  return (
    <div className={'basket' + (props.basketOpened ? ' basket_opened' : '')}>
        <div className='basket__container'>
          <div className='basket__header'>
            <h2 className='basket__title'>Корзина</h2>
            <button className='basket__close-btn'></button>
          </div>

          <ul className='basket__list'>
            <li>
              <article className='basket__item'>
                <img className='basket__item-img' src='./images/card-item-1.jpg'></img>
                <div className='basket__item-info'>
                  <h3 className='basket__item-title'>Мужские Кроссовки Nike Air Max 270</h3>
                  <p className='basket__item-price'>12 999 руб.</p>
                </div>
                <div className='basket__item-delete-btn'></div>
              </article>
            </li>
          </ul>
          <div className='basket__count-container'>
            <p className='basket__count-title'>Итого:</p>
            <span className='basket__count-line'></span>
            <span className='basket__count-price'>21 498 руб.</span>
          </div>
          <div className='basket__count-container'>
            <p className='basket__count-title'>Доствка 5%</p>
            <span className='basket__count-line'></span>
            <span className='basket__count-price'>1074 руб.</span>
          </div>
          <button className='basket__process-btn'>
            <p className='basket__btn-text'>Оформить заказ</p>
            <span className='basket__btn-arrow'></span>
          </button>
        </div>
      </div>
  );
};

export default Basket;
