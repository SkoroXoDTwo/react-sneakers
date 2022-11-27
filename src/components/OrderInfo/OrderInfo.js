import React from 'react';
import './OrderInfo.scss';
import { AppContext } from '../../App';

const OrderInfo = ({ isOpened, close }) => {
  const [numberRandomEmoji, setNumberRandomEmoji] = React.useState(1);
  const { shoppingItems, calculateSumOrder } = React.useContext(AppContext);

  React.useEffect(() => {
    const random = Math.floor(Math.random() * 12) + 1;
    setNumberRandomEmoji(random);
  }, [isOpened]);

 const getDateOrder = () => {
  return shoppingItems[shoppingItems.length - 1][0].date;
 }

  return (
    <div className={'order-info ' + (isOpened ? 'order-info_opened' : '')}>
      <div className='order-info__overlay' onClick={close}></div>
      <div className='order-info__container'>
        <button className='order-info__close-btn' onClick={close}></button>
        <img className='order-info__img' src={`./images/emoji-fun/emoji-${numberRandomEmoji}.svg`} />
        <h2 className='order-info__title'>Заказ №{shoppingItems.length} оформлен</h2>
        <p className='order-info__text'>Сумму заказа: {calculateSumOrder(shoppingItems[shoppingItems.length - 1])} руб.</p>
        <p className='order-info__text'>Дата заказа: {getDateOrder()}</p>
      </div>
    </div>
  );
};

export default OrderInfo;
