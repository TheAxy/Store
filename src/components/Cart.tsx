import React, { useEffect, useCallback } from 'react'
import { observer } from 'mobx-react';
import Store from '../store/store';
import MyButton from '../UI/MyButton';
import '../style/Cart.css'
import ItemCart from './ItemCart';
import cartStore from '../store/cartStore';
import { Link } from 'react-router-dom';
import EmptyETC from './EmptyETC';

const Cart = observer(() => {

  
  // useEffect(() => {
  //   cartStore.finallyPrice()
  // }, [cartStore.cartList])  

  // const Click = useCallback((e: React.MouseEventHandler<HTMLButtonElement>) => {
  //   .
  // }, [])


  return (
    <div className='cart'>
        <div className="main-icon _link">
          <Link className="main-icon__main _link-btn" to="/">Назад</Link>
        </div>
      <div className="cart__container">
          <div className="cart__row">
            {cartStore.cartList.length > 1 
              ? <><div className="cart__center">
                {cartStore.cartList.map(obj => {
                    // if (obj.brand.length > 1) return <ItemCart brand={obj.brand} title={obj.title} price={obj.price} key={index} onClick={() => cartStore.deleteCart(obj)}/>
                    if (obj.title.length > 1) return <ItemCart item={JSON.parse(JSON.stringify(obj))} key={obj.id}/>
                  })
                }
              </div>
              <div className="cart__bottom">
                <div className="cart__price">Итог: {cartStore.finalPrice} руб.</div>
                {<MyButton type='button' className='cart__button' >Сделать заказ</MyButton>} 
              </div></>
              : <EmptyETC className="cart__empty">Корзина пуста</EmptyETC>
            }
          </div>  
      </div>
    </div>
  )
})

export default Cart