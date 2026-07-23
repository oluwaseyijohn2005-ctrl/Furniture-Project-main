export default function ProductDrawer({ product, onClose, addToCart }) {
  if(!product) return null;

  const handleAddToCart = () => {
    addToCart(product); // add the product
    onClose(); // close the drawer after adding
  }

  return (
    <div className="drawer-overlay" onClick={onClose}>
      <div className="product-drawer" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        
        <img src={product.image} alt={product.name} className="drawer-image" />
        
        <div className="drawer-info">
          <span className="category-tag">{product.category}</span>
          <h2>{product.name}</h2>
          <p className="price">₦{product.price.toLocaleString()}</p>
          
          <p className="description">
            Premium quality {product.name.toLowerCase()} crafted with attention to detail. 
            Perfect for modern homes in Ilorin and across Nigeria.
          </p>

          <h4>Features:</h4>
          <ul>
            <li>Premium materials</li>
            <li>Free delivery within Ilorin</li>
            <li>12 months warranty</li>
            <li>Easy assembly</li>
          </ul>

          <button className="btn add-btn large" onClick={handleAddToCart}>
            Add to Cart - ₦{product.price.toLocaleString()}
          </button>
        </div>
      </div>
    </div>
  )
}