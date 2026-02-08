function ProductCard({ item, quantity, addToCart, decreaseQty, deleteFromCart }) {
  if (!item) return null; // safety check

  return (
    <div className="card">
    <img src={item.image} alt={item.name} className="product-img" />
      <h3>{item.name}</h3>
      <p className="price">₹{item.price}</p>

      {quantity === 0 ? (
        <button className="btn-add" onClick={() => addToCart(item)}>
          Add
        </button>
      ) : (
        <div>
          <div className="controls">
            <button onClick={() => decreaseQty(item)}>-</button>
            <span>{quantity}</span>
            <button onClick={() => addToCart(item)}>+</button>
          </div>
          <button className="btn-delete" onClick={() => deleteFromCart(item)}>
            Delete
          </button>
        </div>
      )}
    </div>
  );
}

export default ProductCard;
