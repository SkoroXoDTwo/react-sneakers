import "./App.scss";
import React from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Basket from "./components/Basket/Basket";
import OrderInfo from "./components/OrderInfo/OrderInfo";

import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Shopping from "./pages/Shopping";

import { AppContext } from "./contexts/AppContext";

function App() {
  const [items, setItems] = React.useState([]);
  const [basketItems, setBasketItems] = React.useState([]);
  const [shoppingItems, setShoppingItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [basketOpened, setBasketOpened] = React.useState(false);
  const [orderInfoOpened, setOrderInfoOpened] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");
  const [isLoadingCard, setIsLoadingCard] = React.useState(true);
  const [isLoadingBasket, setIsLoadingBasket] = React.useState(false);

  React.useEffect(() => {
    async function fetchData() {
      setIsLoadingCard(true);

      const basketResponse = await axios.get(
        "https://636d0228ab4814f2b275a28e.mockapi.io/basket"
      );
      const favoritesResponse = await axios.get(
        "https://636d0228ab4814f2b275a28e.mockapi.io/favorites"
      );
      const shoppingResponse = await axios.get(
        "https://636d0228ab4814f2b275a28e.mockapi.io/shopping"
      );
      const itemsResponse = await axios.get(
        "https://636d0228ab4814f2b275a28e.mockapi.io/items"
      );

      setIsLoadingCard(false);
      setBasketItems(basketResponse.data);
      setFavorites(favoritesResponse.data);
      setShoppingItems(shoppingResponse.data);
      setItems(itemsResponse.data);
    }
    fetchData();
  }, []);

  React.useEffect(() => {
    function hiddenOverflow() {
      const body = document.querySelector(".body");
      basketOpened
        ? body.classList.add("body_over-hidden")
        : body.classList.remove("body_over-hidden");
    }

    hiddenOverflow();
  }, [basketOpened]);

  const onAddToBasket = async (obj) => {
    try {
      const item = basketItems.find(
        (item) => Number(item.listId) === Number(obj.listId)
      );

      if (item) {
        await axios.delete(
          `https://636d0228ab4814f2b275a28e.mockapi.io/basket/${item.id}`
        );
        setBasketItems((prev) =>
          prev.filter((item) => Number(item.listId) !== Number(obj.listId))
        );
      } else {
        const { data } = await axios.post(
          "https://636d0228ab4814f2b275a28e.mockapi.io/basket",
          obj
        );
        setBasketItems((prev) => [...prev, data]);
      }
    } catch (error) {
      alert(error);
    }
  };

  const onRemoveToBasket = (id) => {
    axios.delete(`https://636d0228ab4814f2b275a28e.mockapi.io/basket/${id}`);
    setBasketItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onAddToFavorite = async (obj) => {
    try {
      const item = favorites.find(
        (item) => Number(item.listId) === Number(obj.listId)
      );

      if (favorites.find((favObj) => favObj.listId === obj.listId)) {
        axios.delete(
          `https://636d0228ab4814f2b275a28e.mockapi.io/favorites/${item.id}`
        );
        setFavorites((prev) =>
          prev.filter((item) => Number(item.listId) !== Number(obj.listId))
        );
      } else {
        const { data } = await axios.post(
          "https://636d0228ab4814f2b275a28e.mockapi.io/favorites",
          obj
        );
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("Что-то пошло не так");
    }
  };

  const onChangeSearchInput = (evt) => {
    setSearchValue(evt.target.value);
  };

  const isItemAdded = (id) => {
    return basketItems.some((obj) => Number(obj.listId) === Number(id));
  };

  const isItemFavorite = (id) => {
    return favorites.some((obj) => Number(obj.listId) === Number(id));
  };

  const calculateSumItem = () => {
    let sum = Number(0);

    basketItems.forEach((item) => {
      sum += Number(item.price);
    });

    return sum;
  };

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const onSubmitToBasket = async () => {
    setIsLoadingBasket(true);

    const obj = [];
    const date = new Date();

    Object.assign(obj, basketItems);
    obj[0].date = `${date.getDate()}.${
      date.getMonth() + 1
    }.${date.getFullYear()}`;

    const { data } = await axios.post(
      "https://636d0228ab4814f2b275a28e.mockapi.io/shopping",
      obj
    );

    setBasketItems([]);
    setBasketOpened(false);
    await setShoppingItems((prev) => [...prev, data]);
    setIsLoadingBasket(false);
    setOrderInfoOpened(true);

    for (let i = 0; i < basketItems.length; i++) {
      const item = basketItems[i];
      await axios.delete(
        "https://636d0228ab4814f2b275a28e.mockapi.io/basket/" + item.id
      );
      await delay(200);
    }
  };

  const clearHistoryOrders = async () => {
    setShoppingItems([]);

    for (let i = 0; i < shoppingItems.length; i++) {
      const item = shoppingItems[i];
      await axios.delete(
        "https://636d0228ab4814f2b275a28e.mockapi.io/shopping/" + item.id
      );
      await delay(200);
    }
  };

  const closeOrderInfo = () => {
    setOrderInfoOpened(false);
  };

  const calculateSumOrder = (item) => {
    let sum = Number(0);

    for (let key in item) {
      if (key === "id") {
        break;
      }
      sum += Number(item[key].price);
    }
    return sum;
  };

  return (
    <AppContext.Provider
      value={{
        items,
        basketItems,
        favorites,
        shoppingItems,
        isItemAdded,
        isItemFavorite,
        calculateSumItem,
        calculateSumOrder,
      }}
    >
      <div className="page">
        <Basket
          basketOpened={basketOpened}
          items={basketItems}
          onClickCloseBtn={() => setBasketOpened(false)}
          onRemoveItem={onRemoveToBasket}
          onSubmitToBasket={onSubmitToBasket}
          isLoading={isLoadingBasket}
        />

        <OrderInfo isOpened={orderInfoOpened} close={closeOrderInfo} />
        <Header onClickBasket={() => setBasketOpened(true)} />

        <Routes>
          <Route
            path="/"
            element={
              <Home
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                onAddToBasket={onAddToBasket}
                onAddToFavorite={onAddToFavorite}
                onChangeSearchInput={onChangeSearchInput}
                basketItems={basketItems}
                isLoading={isLoadingCard}
              />
            }
          />
          <Route
            path="/favorites"
            element={
              <Favorites
                onAddToFavorite={onAddToFavorite}
                onAddToBasket={onAddToBasket}
              />
            }
          />

          <Route
            path="/shopping"
            element={<Shopping clearHistory={clearHistoryOrders} />}
          />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
