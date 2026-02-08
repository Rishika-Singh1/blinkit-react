import ProductCard from "./ProductCard";

const products = [
  { id: 1, name: "Apple", price: 100, image: "/images/apple.jpg" },
  { id: 2, name: "Milk", price: 50, image: "/images/milk.jpg" },
  { id: 3, name: "Bread", price: 40, image: "/images/bread.jpg" },
  { id: 4, name: "Coconut Water", price: 60, image: "/images/coconut.jpg" },
  { id: 5, name: "Soap", price: 30, image: "/images/soap.jpg" },
  { id: 6, name: "Surf Excel", price: 120, image: "/images/surf.jpg" },
  { id: 7, name: "Rice", price: 80, image: "/images/rice.jpg" },
  { id: 8, name: "Sugar", price: 45, image: "/images/sugar.jpg" },
  { id: 9, name: "Tea", price: 90, image: "/images/tea.jpg" },
  { id: 10, name: "Cooking Oil", price: 150, image: "/images/oil.jpg" },
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
