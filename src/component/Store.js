import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import uniqid from "uniqid";
import getImgaes from "../images/getImages";
// import shoppingCart from "./shoppingCart";

const Store = () => {
    const [items, setItems] = useState([]);
    // const [types, setTypes] = useState([]);
    // const [myCart, setMyCart] = useState(shoppingCart());

    useEffect(() => {
        const imgArr = getImgaes();
        const itemArr = [];
        for (let i = 0; i < imgArr.length; i++) {
            itemArr.push({
                id: uniqid(),
                type: imgArr[i].type,
                img: imgArr[i].img,
                name: imgArr[i].name
            })
        }
        setItems(itemArr);
        // setTypes(['paramecia', 'zoan', 'logia']);
    }, []);

    return (
        <div className="store">
            <h1>store</h1>
            <div className="store_content">
                {/* for type filter implement later */}
                {/* <div className="type_div">
                    <label>Types</label>
                    <ul className="types">
                        {types.map((type, i) => {
                            return (
                                <li className="type" key={i}>
                                    {type}
                                </li>
                            )
                        })}
                    </ul>
                </div> */}
                <ul className="items">
                    {items.map(item => {
                        return (
                            <li className="item" key={item.id}>
                                <Link to={`/store/${item.id}`}
                                        state={{info: item}}>
                                        <img src={item.img} alt={item.name}/>
                                        <label>{item.name}</label>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    );
}

export default Store;