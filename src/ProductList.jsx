import ProductCard from "./ProductCard";

const products = [
  { id: 1, name: "Apple", price: 100, image: import.meta.env.BASE_URL + "images/apple.jpg" },
  { id: 2, name: "Milk", price: 50, image: import.meta.env.BASE_URL + "images/milk.jpg" },
  { id: 3, name: "Bread", price: 40, image: import.meta.env.BASE_URL + "images/bread.jpg" },
  { id: 4, name: "Coconut Water", price: 60, image: import.meta.env.BASE_URL + "images/coconut.jpg" },
  { id: 5, name: "Soap", price: 35, image: import.meta.env.BASE_URL + "images/soap.jpg" },
  { id: 6, name: "Surf Excel", price: 120, image: import.meta.env.BASE_URL + "images/surf.jpg" },
  { id: 7, name: "Rice", price: 80, image: import.meta.env.BASE_URL + "images/rice.jpg" },
  { id: 8, name: "Sugar", price: 45, image: import.meta.env.BASE_URL + "images/sugar.jpg" },
  { id: 9, name: "Tea", price: 90, image: import.meta.env.BASE_URL + "images/tea.jpg" },
  { id: 10, name: "Oil", price: 150, image: import.meta.env.BASE_URL + "images/oil.jpg" },
];


function ProductList({ cart, addToCart, decreaseQty, deleteFromCart }) {
  return (
    <div className="products">
      {products.map((item) => (
        <ProductCard
          key={item.id}
          item={item}                 // 👈 pass as "item"
          quantity={cart[item.id] || 0}
          addToCart={addToCart}
          decreaseQty={decreaseQty}
          deleteFromCart={deleteFromCart}
        />
      ))}
    </div>
  );
}

export default ProductList;
