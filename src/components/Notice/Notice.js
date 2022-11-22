import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './Notice.scss';

const Notice = ({ title, text }) => {
  const numberRandomEmoji = Math.floor(Math.random() * 10) + 1;

  return (
    <div className='notice'>
      <img className='notice__img' src={`./images/emoji/emoji-${numberRandomEmoji}.svg`} />
      <h3 className='notice__title'>{title}</h3>
      <p className='notice__text'>{text}</p>
      <Link to={'/'}>
        <button className='notice__btn'>
          <span className='notice__btn-arrow'></span>
          <p className='notice__btn-text'>Вернуться назад</p>
        </button>
      </Link>
    </div>
  );
};

export default Notice;
