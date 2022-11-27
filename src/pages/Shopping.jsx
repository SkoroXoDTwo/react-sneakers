import React from 'react';
import { AppContext } from '../App';
import CardShopping from '../components/CardShopping/CardShopping';
import Notice from '../components/Notice/Notice';

function Shopping({ clearHistory }) {
  const { shoppingItems } = React.useContext(AppContext);

  return (
    <div className='cards'>
      <div className='cards__header'>
        <h1 className='cards__title'>Мои покупки</h1>
        {shoppingItems.length > 0 ? <button className='cards__clear-btn' onClick={clearHistory}>Очистить историю</button> : null}
      </div>
      {shoppingItems.length > 0 ?
        <ul className='cards__list cards__list_shopping'>
          {
            shoppingItems.map((item, index) =>
              <CardShopping
                key={index}
                item={item}
                {...item}
              />
            )
          }
        </ul>
        :
        <Notice
          title='Покупок нет ;('
          text='Вы ничего не покупали'
          hasButton={true}
        />
      }
    </div>
  )
}

export default Shopping;
