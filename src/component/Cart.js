import React from "react";

const Cart = ({myCart, onRemoveItem}) => {
    const cartArr = myCart.getCart();

    return (
        <div className="cart">
            <h1>Your Cart</h1>
            <div className="cartItems">
                {cartArr.map(item => {
                    const price = parseFloat(item.myPrice.substring(1)) 
                                    * parseFloat(item.myQuant);
                    return (
                        <div className="cartItem" key={item.myName}>
                            <img src={item.myImg} alt={item.name}/>
                            <p className="cartItem_name">{item.myName}</p>
                            <p className="cartItem_q">{item.myQuant}</p>
                            <p className="cartItem_price">${price}</p>
                            <button  className="remove">
                                Remove Item
                            </button>
                        </div>
                    );
                })}
            </div>
            <div className="checkOut">
                <button>Check out</button>
            </div>
        </div>
    );
}

export default Cart;