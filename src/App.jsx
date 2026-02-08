import { useState } from "react";
import Header from "./Header";
import Slider from "./Slider";
import ProductList from "./ProductList";

function App() {
  const [cart, setCart] = useState({}); // { id: quantity }

  const addToCart = (product) => {
    setCart((prev) => ({
      ...prev,
      [product.id]: (prev[product.id] || 0) + 1,
    }));
  };

  const decreaseQty = (product) => {
    setCart((prev) => {
      const newCart = { ...prev };
      if (newCart[product.id] > 1) {
        newCart[product.id] -= 1;
      } else {
        delete newCart[product.id];
      }
      return newCart;
    });
  };

  const deleteFromCart = (product) => {
    setCart((prev) => {
      const newCart = { ...prev };
      delete newCart[product.id];
      return newCart;
    });
  };

  const totalItems = Object.values(cart).reduce((a, b) => a + b, 0);

return (
  <div className="app-shell">
    <Header totalItems={totalItems} />
    <Slider />
    <ProductList
      cart={cart}
      addToCart={addToCart}
      decreaseQty={decreaseQty}
      deleteFromCart={deleteFromCart}
    />
  </div>
);

}

export default App;
