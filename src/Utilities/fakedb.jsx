const addToDb = _id => {
    let shoppingCart = {}
    
    const storeCart = localStorage.getItem('shoppingCart')
    if (storeCart) {
        shoppingCart = JSON.parse(storeCart)
    } else{
        shoppingCart = {}
    }
    const quantity = shoppingCart[_id]
    if (quantity) {
        const newQuantity = quantity + 1
        shoppingCart[_id] = newQuantity
        // localStorage.setItem(_id, newQuantity)
    } else{
        shoppingCart[_id] = 1
        // localStorage.setItem(_id, 1)
    }
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart))

    
}

const remove = _id => {
    const storeCart = localStorage.getItem('shoppingCart')
    if (storeCart) {
        const shopping_Cart = JSON.parse(storeCart)
        if (_id in shopping_Cart) {
            delete shopping_Cart[_id]
            localStorage.setItem('shoppingCart', JSON.stringify(shopping_Cart))

        }
    }
}

export {addToDb, remove}
