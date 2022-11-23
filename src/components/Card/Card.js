import React from 'react';
import { AppContext } from '../../App';
import './card.scss';
import ContentLoader from 'react-content-loader';

const Card = ({
  id,
  linkImg,
  title,
  price,
  onAdd,
  onFavorite,
  listId,
  loading = false,
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
        {
          loading ?
            <ContentLoader
              speed={2}
              width={150}
              height={214}
              viewBox="0 0 150 214"
              backgroundColor="#f3f3f3"
              foregroundColor="#ecebeb"
            >
              <rect x="0" y="0" rx="10" ry="10" width="150" height="81" />
              <rect x="0" y="105" rx="3" ry="3" width="150" height="15" />
              <rect x="0" y="129" rx="3" ry="3" width="90" height="15" />
              <rect x="0" y="162" rx="8" ry="8" width="80" height="24" />
              <rect x="114" y="154" rx="8" ry="8" width="32" height="32" />
            </ContentLoader>
            :
            <>
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
            </>
        }
      </article>
    </li>
  );
};

export default Card;
