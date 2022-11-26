import React from 'react';
import './cardShopping.scss';

const CardShopping = ({ id, item }) => {

  const calculateSumOrder = () => {
    let sum = Number(0);

    for (let key in item) {
      if (key === 'id') {
        break;
      }
      sum += Number(item[key].price);
    }
    return sum;
  }

  const handleItemToArray = () => {
    const arr = [];

    for (let key in item) {
      if (key === 'id') {
        break;
      }
      arr[key] = item[key];
    }

    return arr;
  }

  return (
    <li>
      <article className='card-shopping'>
        <h3 className='card-shopping__title'>Заказ №{id}</h3>
        <ul className='card-shopping__container'>
          <span className='card-shopping__count'>{handleItemToArray().length} шт.</span>
          {
            handleItemToArray().map((item, index) =>
              <li key={index} className='card-shopping__container-item'>
                <img className='card-shopping__item-img' src={item.linkImg} alt='' />
              </li>
            )
          }
        </ul>
        <div className='card-shopping__info'>
          <p className='card-shopping__info-text'>{calculateSumOrder()} руб.</p>
          <p className='card-shopping__info-text'>{item[0].date}</p>
        </div>
      </article>
    </li>
  )
}

export default CardShopping;
