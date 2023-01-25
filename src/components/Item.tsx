import React, { FC, memo } from 'react'
import '../style/Item.css'
import MyButton from '../UI/MyButton'

interface IItem{
  id: number,
  title: string,
  price: string,
  image: string,
  onClick?: any,
}

const Item: FC<IItem> = memo(({id, title, price, image, onClick}) => {

  return (
    <div className='shop-item'>
        <div className="shop-item__up">
          <div className="shop-item__img">
            <img src={image} alt="Изображение"/>
          </div>
        </div>
        <div className="shop-item__title">{title}</div>
        <div className="shop-item__price">Цена: {price} руб.</div>
        <div className="shop-item__bottom">
          <MyButton type='button' className='shop-item__button shop-button-buy' onClick={onClick}>Купить</MyButton>
        </div>
    </div>
  )
})

export default Item