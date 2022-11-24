import React from 'react';
import { AppContext } from '../../App';
import './card.scss';

const Card = ({
  id,
  linkImg,
  title,
  price,
  onAdd,
  onFavorite,
  listId,
}) => {

  const { isItemAdded } = React.useContext(AppContext);
  const { isItemFavorite } = React.useContext(AppContext);
  const [btnAddActive, setBtnAddActive] = React.useState(false);
  const [btnLikeActive, setBtnLikeActive] = React.useState(false);

  const onClickAdd = async () => {
    setBtnAddActive(true);
    await onAdd({ linkImg, title, price, id, listId });
    setBtnAddActive(false);
  }

  const onClickFavorite = async () => {
    setBtnLikeActive(true);
    await onFavorite({ linkImg, title, price, id, listId });
    setBtnLikeActive(false);
  }

  return (
    <li>
      <article className='card'>
        <div className='card__img-container'>
          <button
            className={
              'card__like-btn ' +
              (isItemFavorite(listId) ? 'card__like-btn_type_active ' : '') +
              (btnLikeActive ? 'card__like-btn_type_loading' : '')
            }
            onClick={onClickFavorite}
            disabled={btnLikeActive}>
          </button>
          <img className='card__img' src={linkImg} alt="Фоторграфия кроссовок"></img>
        </div>
        <h2 className='card__title'>{title}</h2>
        <div className='card__footer'>
          <div className='card__price-container'>
            <p className='card__price-title'>Цена:</p>
            <span className='card__price'>{price} руб.</span>
          </div>
          <button
            className={
              'card__add-btn ' +
              (isItemAdded(listId) ? 'card__add-btn_type_active ' : '') +
              (btnAddActive ? 'card__add-btn_type_loading' : '')
            }
            onClick={onClickAdd}
            disabled={btnAddActive}>
          </button>
        </div>
      </article>
    </li>
  );
};

export default Card;
