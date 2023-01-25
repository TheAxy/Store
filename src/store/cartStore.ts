import { act } from '@testing-library/react';
import { observable, action } from 'mobx';

const cartStore = observable({
    finalPrice: 0,
    cartList: [
        {id: 0,
        type: '',
        brand: '',
        title: '',
        price: 0,
        count: 1
    }],

    setCart: action((itm: object) => {
        let fill: boolean = false
        cartStore.cartList.forEach(item => {
            if (item.id === JSON.parse(JSON.stringify(itm)).id) {
                fill = true
                item.count++
            }
        })
        if (!fill) cartStore.cartList.push({...JSON.parse(JSON.stringify(itm)), count: 1})
        cartStore.finallyPrice()
    }),

    deleteCart: action((itm: object) => {
        cartStore.cartList = cartStore.cartList.filter((item) => item.id !== JSON.parse(JSON.stringify(itm)).id)
    }),

    increaseCount: action((itm: object) => {
        cartStore.cartList.map((item) => {if (item.id === JSON.parse(JSON.stringify(itm)).id) item.count++})
        cartStore.finallyPrice()
    }),
    decreaseCount: action((itm: object) => {
        cartStore.cartList.map((item) => {if (item.id === JSON.parse(JSON.stringify(itm)).id) item.count--})
        cartStore.finallyPrice()
    }),

    finallyPrice: action(() => {
        cartStore.finalPrice = 0
        cartStore.cartList.forEach((item) => cartStore.finalPrice += Math.trunc((item.count * item.price)))
    }),
})

export default cartStore;