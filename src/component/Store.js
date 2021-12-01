import React, {useEffect, useState} from "react";
import uniqid from "uniqid";
import getImgaes from "../images/getImages";

const Store = () => {
    const [items, setItems] = useState([]);

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
    }, []);

    return (
        <div className="store">
            <h1>store</h1>
            <ul className="items">
                {items.map(item => {
                    return (
                        <li className="item" key={item.id}>
                            <img src={item.img} alt={item.name}/>
                            <label>{item.name}</label>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default Store;