import React from "react";
import { useLocation } from "react-router";
import cartItem from "./cartItem";

const StoreItem = ({onAddToCart}) => {
    const info = useLocation().state.info;

    const onClickAdd = () => {
        const newItem = cartItem(info.name, '$19.99', 1, info.img);
        onAddToCart(newItem);
    }

    return (
        <div className="storeItem">
            <h1>{info.name}</h1>
            <div className="info">
                <img src={info.img} alt={info.name}/>
                <label className="price">$19.99</label>
                <button onClick={() => onClickAdd()}>buy</button>
            </div>
        </div>
    );
}

export default StoreItem;