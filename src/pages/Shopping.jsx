import React from 'react';
import { AppContext } from '../App';
import CardShopping from '../components/CardShopping/CardShopping';
import Notice from '../components/Notice/Notice';

function Shopping() {
  const { shoppingItems } = React.useContext(AppContext);

  return (
    <div className='cards'>
      <div className='cards__header'>
        <h1 className='cards__title'>Мои покупки</h1>
      </div>
      <ul className='cards__list cards__list_shopping'>
        {shoppingItems.map((item, index) =>
          <CardShopping
            key={index}
            item={item}
            {...item}
          />
        )}

      </ul>

    </div>
  )
}

export default Shopping;
