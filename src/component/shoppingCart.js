const shoppingCart = () => {
    const cart = [];

    function addItem(newItem) {
        let hasIt = false;
        cart.forEach(item => {
            if (item.myName === newItem.myName) {
                hasIt = true;
                item.myQuant += 1;
            }
        });
        if (!hasIt)
            cart.push(newItem);
        return cart;
    }

    function removeItem(targetItem) {
        for (let i = 0; i < cart.length; i++) {
            const item = cart[i];
            if (item.myName === targetItem.myName) {
                    if (item.myQuant < 2)
                        cart.removeItem(i);
                    else
                        item.myQuant -= 1;
            }
        }
        return cart;
    }

    function getCart() {
        return cart;
    }

    return {addItem, removeItem, getCart};
}

export default shoppingCart;