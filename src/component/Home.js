import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <h1>Welcome to Devil Fruit Store</h1>
      <p>You can find the rarest Devil Fruit in here</p>
      <Link to="/store">
        <button className="shop">Shop</button>
      </Link>
    </div>
  );
}

export default Home;
