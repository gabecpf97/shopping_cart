import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./component/Cart";
import Home from "./component/Home";
import NavBar from "./component/NavBar";
import Store from "./component/Store";
import "./style.css";
import React, {useState} from "react";
import shoppingCart from "./component/shoppingCart";
import StoreItem from "./component/StoreItem";

const RouteSwitch = () => {
    const [myCart, setMyCart] = useState(shoppingCart());

    const onAddToCart = (newItem) => {
        setMyCart(myCart => {
            myCart.addItem(newItem);
            return myCart;
        });
    }

    const onRemoveItem = (targetItem) => {
        setMyCart(myCart => {
            myCart.removeItem(targetItem);
            return myCart;
        });
    }

    return (
        <div className="container">
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/store" element={<Store />} />
                    <Route path="/store/:id" element={<StoreItem 
                                            onAddToCart={onAddToCart}/>} />
                    <Route path="/cart" element={<Cart 
                                                myCart = {myCart}
                                                onRemoveItem = {onRemoveItem} />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default RouteSwitch;