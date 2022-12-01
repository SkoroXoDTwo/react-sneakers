import React from "react";
import "./OrderInfo.scss";
import { AppContext } from '../../contexts/AppContext';

const OrderInfo = ({ isOpened, close }) => {
  const [numberRandomEmoji, setNumberRandomEmoji] = React.useState(1);
  const [dateOrder, setDateOrder] = React.useState("");
  const { shoppingItems, calculateSumOrder } = React.useContext(AppContext);

  React.useEffect(() => {
    if (shoppingItems.length > 0) {
      const date = shoppingItems[shoppingItems.length - 1][0].date;
      setDateOrder(date);
    }

    const random = Math.floor(Math.random() * 12) + 1;
    setNumberRandomEmoji(random);
  }, [shoppingItems.length]);

  return (
    <div className={"order-info " + (isOpened ? "order-info_opened" : "")}>
      <div className="order-info__overlay" onClick={close}></div>
      <div className="order-info__container">
        <button className="order-info__close-btn" onClick={close}></button>
        <img
          className="order-info__img"
          src={`./images/emoji-fun/emoji-${numberRandomEmoji}.svg`}
        />
        <h2 className="order-info__title">
          Заказ №{shoppingItems.length} оформлен
        </h2>
        <p className="order-info__text">
          Сумму заказа:{" "}
          {calculateSumOrder(shoppingItems[shoppingItems.length - 1])} руб.
        </p>
        <p className="order-info__text">Дата заказа: {dateOrder}</p>
      </div>
    </div>
  );
};

export default OrderInfo;
