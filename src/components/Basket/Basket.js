import React from 'react';
import './basket.scss';

const Basket = ({onClickCloseBtn, items = []}) => {


  return (
    <div className={'basket'}>
        <div className='basket__container'>
          <div className='basket__header'>
            <h2 className='basket__title'>Корзина</h2>
            <button className='basket__close-btn' onClick={onClickCloseBtn}></button>
          </div>

          <ul className='basket__list'>

            {items.map((item, index) =>
              <li key={index}>
                <article className='basket__item'>
                  <img className='basket__item-img' src={`${item.linkImg}`}></img>
                  <div className='basket__item-info'>
                    <h3 className='basket__item-title'>{item.title}</h3>
                    <p className='basket__item-price'>{item.price} руб.</p>
                  </div>
                  <div className='basket__item-delete-btn'></div>
                </article>
              </li>
              )}

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
