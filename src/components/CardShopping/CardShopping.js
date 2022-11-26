import React from 'react';
import './cardShopping.scss';
import { AppContext } from '../../App';

const CardShopping = ({id, item}) => {

  const calculateSumOrder = () => {
    let sum = Number(0);

    for (let key in item) {
      if(key === 'id') {
        break;
      }
      sum += Number(item[key].price);
    }
    return sum;
  }

  console.log(item);
  return (
    <li>
      <article className='card-shopping'>
        <h3 className='card-shopping__title'>Заказ №{id}</h3>
        <div className='card-shopping__container'>
          <div className='card-shopping__container-item'>
            <img className='card-shopping__item-img' src='./images/card-item-1.jpg' alt='' />
          </div>
          <div className='card-shopping__container-item'>
            <img className='card-shopping__item-img' src='./images/card-item-1.jpg' alt='' />
          </div>
          <div className='card-shopping__container-item'>
            <img className='card-shopping__item-img' src='./images/card-item-1.jpg' alt='' />
          </div>
          <div className='card-shopping__container-item'>
            <img className='card-shopping__item-img' src='./images/card-item-1.jpg' alt='' />
          </div>
          <div className='card-shopping__container-item'>
            <img className='card-shopping__item-img' src='./images/card-item-1.jpg' alt='' />
          </div>
        </div>
        <div className='card-shopping__info'>
          <p className='card-shopping__info-text'>{calculateSumOrder()} руб.</p>
          <p className='card-shopping__info-text'>{item[0].date}</p>
        </div>
      </article>
    </li>
  )
}

export default CardShopping;
