import { observer } from 'mobx-react';
import React, { useCallback, useEffect, useState } from 'react';
import './style/App.css';
import ItemList from './components/ItemList';
import Store from './store/store';
import MyButton from './UI/MyButton';
import cartStore from './store/cartStore';
import { Link, NavLink } from 'react-router-dom';
import { Search, Sort } from './components/Sorting';
import EmptyETC from './components/EmptyETC';

const App = observer(() => { 
  
  const [isLoad, setIsLoad] = useState<boolean>(false)

  useEffect(() => {
    setIsLoad(true)
    fetch('https://fakestoreapi.com/products')
      .then(res=>res.json())
      .then(json=> {
        Store.shopItems = Store.sortedShopItems = (json)
        setIsLoad(false)
      })
  }, [])

  return (
    <div className="app">
      <div className="cart-icon _link">
        <Link className="cart-icon__main _link-btn" to="/cart">Корзина</Link>
          {cartStore.cartList.length-1 > 0 &&
            <div className="cart-icon__enums">{cartStore.cartList.length-1}</div>
          }
      </div>
      <div className="app__container">
        <div className="app__sorting">
          <Search className="app__sorting-search" state={Store.setInputLine} callback={Store.setSortBySearch}/>
          <div className="app__sorting-sort">
            <Sort className="app__sorting-sort-search" defaultValue='Категория' arrOptions={['electronics', 'jewelery', "men's clothing", "women's clothing"]} callback={Store.setSortBySelect}/>
            <Sort className="app__sorting-sort-main" defaultValue='Сортировка' arrOptions={['По возрастанию', 'По убыванию']} callback={Store.setSorting}/>
          </div>
        </div>
        <div className="app__row">
          {isLoad 
            ?  <EmptyETC className="app__load">Загрузка...</EmptyETC>
            : (Store.sortedShopItems.length > 0 
                ? <ItemList/>
                : <EmptyETC className="app__empty">Не найдено</EmptyETC>
               )
          }
        </div>
      </div>
    </div>
  );
})

export default App;