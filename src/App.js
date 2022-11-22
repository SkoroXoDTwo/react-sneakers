import './App.scss';
import React from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Basket from './components/Basket/Basket';
import Home from './pages/Home';
import Favorites from './pages/Favorites';

export const AppContext = React.createContext([]);

function App() {
  const [items, setItems] = React.useState([]);
  const [basketItems, setBasketItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [basketOpened, setBasketOpened] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');

  React.useEffect(() => {
    async function fetchData() {
      const basketResponse = await axios.get('https://636d0228ab4814f2b275a28e.mockapi.io/basket');
      const favoritesResponse = await axios.get('https://636d0228ab4814f2b275a28e.mockapi.io/favorites');
      const itemsResponse = await axios.get('https://636d0228ab4814f2b275a28e.mockapi.io/items');

      setBasketItems(basketResponse.data);
      setFavorites(favoritesResponse.data);
      setItems(itemsResponse.data);
    }
    fetchData();
  }, []);

  const onAddToBasket = async (obj) => {
    try {
      const item = basketItems.find((item) => Number(item.listId) === Number(obj.listId));

      if (item) {
        await axios.delete(`https://636d0228ab4814f2b275a28e.mockapi.io/basket/${item.id}`);
        setBasketItems((prev) => prev.filter(item => Number(item.listId) !== Number(obj.listId)));

      } else {
        const { data } = await axios.post('https://636d0228ab4814f2b275a28e.mockapi.io/basket', obj);
        setBasketItems((prev) => [...prev, data]);
      }
    }
    catch (error) {
      console.log('Что-то пошло не так');
    }
  };

  const onRemoveToBasket = (id, item) => {
    axios.delete(`https://636d0228ab4814f2b275a28e.mockapi.io/basket/${id}`);
    setBasketItems((prev) => prev.filter(item => item.id !== id));
  };

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => favObj.id === obj.id)) {
        axios.delete(`https://636d0228ab4814f2b275a28e.mockapi.io/favorites/${obj.id}`);
      } else {
        const { data } = await axios.post('https://636d0228ab4814f2b275a28e.mockapi.io/favorites', obj);
        setFavorites((prev) => [...prev, data]);
      }
    }
    catch (error) {
      alert('Не удалось добавить в фавориты');
    }

  };

  const onChangeSearchInput = (evt) => {
    setSearchValue(evt.target.value);
  }

  const isItemAdded = (id) => {
    return basketItems.some((obj) => Number(obj.listId) === Number(id))
  }

  return (
    <AppContext.Provider value={{ items, basketItems, favorites, isItemAdded }}>
      <div className="page">
        {basketOpened &&
          <Basket
            items={basketItems}
            onClickCloseBtn={() => setBasketOpened(false)}
            onRemoveItem={onRemoveToBasket}
          />}

        <Header onClickBasket={() => setBasketOpened(true)} />

        <Routes>
          <Route path="/" element={
            <Home
              items={items}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onAddToBasket={onAddToBasket}
              onAddToFavorite={onAddToFavorite}
              onChangeSearchInput={onChangeSearchInput}
              basketItems={basketItems}
            />
          } />
          <Route path="/favorites" element={
            <Favorites
              onAddToFavorite={onAddToFavorite}
            />
          } />
        </Routes>
      </div>
    </AppContext.Provider>

  );
}

export default App;
