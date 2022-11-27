import React from "react";
import "./basket.scss";
import { AppContext } from "../../App";

const Basket = ({
  items = [],
  onClickCloseBtn,
  onRemoveItem,
  basketOpened,
  onSubmitToBasket,
  isLoading,
}) => {
  const { calculateSumItem } = React.useContext(AppContext);

  return (
    <div className={"basket " + (basketOpened ? "basket_opened" : "")}>
      <div className="basket__overlay" onClick={onClickCloseBtn}></div>
      <div
        className={
          "basket__container " +
          (basketOpened
            ? "basket__container_anim_open"
            : "basket__container_anim_close")
        }
      >
        <div className="basket__header">
          <h2 className="basket__title">Корзина</h2>
          <button
            className="basket__close-btn"
            onClick={onClickCloseBtn}
          ></button>
        </div>

        {items.length > 0 ? (
          <ul className="basket__list">
            {items.map((item, index) => (
              <li key={index}>
                <article className="basket__item">
                  <img
                    className="basket__item-img"
                    src={`${item.linkImg}`}
                  ></img>
                  <div className="basket__item-info">
                    <h3 className="basket__item-title">{item.title}</h3>
                    <p className="basket__item-price">{item.price} руб.</p>
                  </div>
                  <div
                    className="basket__item-delete-btn"
                    onClick={() => onRemoveItem(item.id, item)}
                  ></div>
                </article>
              </li>
            ))}
          </ul>
        ) : (
          <div className="basket__notice">
            <img
              className="basket__notice-img"
              src="./images/basket-notice-null.svg"
            />
            <h3 className="basket__notice-title">Корзина пустая</h3>
            <p className="basket__notice-text">
              Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
            </p>
            <button className="basket__notice-btn">
              <span className="basket__btn-arrow basket__btn-arrow_notice"></span>
              <p className="basket__btn-text" onClick={onClickCloseBtn}>
                Вернуться назад
              </p>
            </button>
          </div>
        )}
        {items.length > 0 && (
          <div>
            <div className="basket__count-container">
              <p className="basket__count-title">Итого:</p>
              <span className="basket__count-line"></span>
              <span className="basket__count-price">{`${calculateSumItem()} руб.`}</span>
            </div>
            <div className="basket__count-container">
              <p className="basket__count-title">Доствка 5%</p>
              <span className="basket__count-line"></span>
              <span className="basket__count-price">{`${Math.floor(
                calculateSumItem() * 0.05
              )} руб.`}</span>
            </div>
            <button
              className="basket__process-btn"
              onClick={onSubmitToBasket}
              disabled={isLoading}
            >
              <p className="basket__btn-text">
                {isLoading ? "Оформление..." : "Оформить заказ"}
              </p>
              <span className="basket__btn-arrow"></span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Basket;
