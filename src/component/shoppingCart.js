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
    }

    function removeItem(targetItem) {
        for (let i = 0; i < cart.length; i++) {
            const item = cart[i];
            if (item.myName === targetItem.myName) {
                    if (item.myQuant < 2)
                        cart.splice(i, 1);
                    else
                        item.myQuant -= 1;
            }
        }
    }

    function getCart() {
        return cart;
    }

    return {addItem, removeItem, getCart};
}

export default shoppingCart;