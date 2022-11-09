import React from 'react';
import './header.scss';

const Header = () => {
  return (
    <header className='header'>
      <div className='header__logo'>
        <img className='header__logo-img' src='./images/logo.svg' alt='Логотип'></img>
        <div className='header__logo-info'>
          <h3 className='header__logo-title'>REACT SNEAKERS</h3>
          <p className='header__logo-subtitle'>Магазин лучших кроссовок</p>
        </div>
      </div>

      <nav>
        <ul className='header__menu'>
          <li>
            <button className='header__menu-button'>
              <img className='header__menu-icon' src='./images/menu-basket-icon.svg' alt="кнопка меню корзины"></img>
              <span className='header__menu-text'>1205 руб.</span>
            </button>
          </li>
          <li>
            <button className='header__menu-button'>
              <img className='header__menu-icon' src='./images/menu-heart-icon.svg' alt="кнопка меню закладок"></img>
            </button>
          </li>
          <li>
            <button className='header__menu-button'>
              <img className='header__menu-icon' src='./images/menu-profile-icon.svg' alt="кнопка меню профиля"></img>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
