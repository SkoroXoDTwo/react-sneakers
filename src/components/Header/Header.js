import React from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../contexts/AppContext';

import logoImg from "../../images/logo.svg";
import basketIcon from "../../images/menu-basket-icon.svg";
import heartIcon from "../../images/menu-heart-icon.svg";
import profileIcon from "../../images/menu-profile-icon.svg";
import './header.scss';


const Header = (props) => {
  const { calculateSumItem } = React.useContext(AppContext);

  return (
    <header className='header'>
      <Link to={'/'}>
        <div className='header__logo'>
          <img className='header__logo-img' src={logoImg} alt='Логотип'></img>
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
              <img className='header__menu-icon' src={basketIcon} alt="кнопка меню корзины"></img>
              <span className='header__menu-text'>{`${calculateSumItem()} руб.`}</span>
            </button>
          </li>

          <Link to={'/favorites'}>
            <li>
              <button className='header__menu-button'>
                <img className='header__menu-icon' src={heartIcon} alt="кнопка меню закладок"></img>
              </button>
            </li>
          </Link>

          <Link to={'/shopping'}>
            <li>
              <button className='header__menu-button'>
                <img className='header__menu-icon' src={profileIcon} alt="кнопка меню профиля"></img>
              </button>
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
