import { observable, action } from 'mobx';

const Store = observable({
    // shopItems: [{
    //     id: 1,
    //     type: 'telephone',
    //     brand: 'apple',
    //     title: 'iphohe 13',
    //     price: 100000
    // },
    // {
    //     id: 2,
    //     type: 'notebook',
    //     brand: 'asus',
    //     title: 'gaming 15',
    //     price: 150000
    // },
    // {
    //     id: 3,
    //     type: 'watch',
    //     brand: 'huawei',
    //     title: 'pro V',
    //     price: 50000
    // },
    // ] ,
    shopItems: [{
        id: 1,
        title: '',
        price: '',
        category: '',
        description: '',
        image: ''
    }],

    sortedShopItems: [{
        id: 1,
        title: '',
        price: '',
        category: '',
        description: '',
        image: ''
    }],

    inputLine: '',

    setInputLine: action((str: string) =>{
        Store.inputLine = str
    }),

    setSortBySearch: action(() => {
        Store.sortedShopItems = JSON.parse(JSON.stringify(Store.shopItems.filter(item => item.title.includes(Store.inputLine))))
    }),

    setSortBySelect: action((selected: string) => {
        Store.sortedShopItems = JSON.parse(JSON.stringify(Store.shopItems.filter(item => item.category === selected)))
    }),

    setSorting: action((method: string) => {
        Store.shopItems.sort((a, b) => Number(a.price) - Number(b.price))
        if (method === 'По возрастанию') Store.sortedShopItems.sort((a, b) => Number(a.price) - Number(b.price))
        else if (method === 'По убыванию') Store.sortedShopItems.sort((a, b) => Number(b.price) - Number(a.price))
    })

    
})

export default Store;