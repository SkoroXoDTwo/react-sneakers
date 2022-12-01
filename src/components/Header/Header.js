import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import { AppContext } from '../../contexts/AppContext';

const Header = (props) => {
  const { calculateSumItem } = React.useContext(AppContext);

  return (
    <header className='header'>
      <Link to={'/'}>
        <div className='header__logo'>
          <img className='header__logo-img' src='./images/logo.svg' alt='Логотип'></img>
          <div className='header__logo-info'>
            <h3 className='header__logo-title'>REACT SNEAKERS</h3>
            <p className='header__logo-subtitle'>Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>

      <nav>
        <ul className='header__menu'>
          <li>
            <button className='header__menu-button' onClick={props.onClickBasket}>
              <img className='header__menu-icon' src='./images/menu-basket-icon.svg' alt="кнопка меню корзины"></img>
              <span className='header__menu-text'>{`${calculateSumItem()} руб.`}</span>
            </button>
          </li>

          <Link to={'/favorites'}>
            <li>
              <button className='header__menu-button'>
                <img className='header__menu-icon' src='./images/menu-heart-icon.svg' alt="кнопка меню закладок"></img>
              </button>
            </li>
          </Link>

          <Link to={'/shopping'}>
            <li>
              <button className='header__menu-button'>
                <img className='header__menu-icon' src='./images/menu-profile-icon.svg' alt="кнопка меню профиля"></img>
              </button>
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
