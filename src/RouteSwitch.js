import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./component/Cart";
import Home from "./component/Home";
import NavBar from "./component/NavBar";
import Store from "./component/Store";
import "./style.css";

const RouteSwitch = () => {
    return (
        <div className="container">
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/store" element={<Store />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default RouteSwitch;