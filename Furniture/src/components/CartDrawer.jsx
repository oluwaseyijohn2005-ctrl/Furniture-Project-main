export default function CartDrawer({ cart, cartTotal, onClose, updateQty, removeFromCart, onCheckout }) {
  const totalItems = cart.reduce((a, b) => a + b.qty, 0);

  return (
    <div className="drawer-overlay" onClick={onClose}>
      <div className="cart-drawer" onClick={e => e.stopPropagation()}>
        
        <div className="cart-header">
          <h2>Your Cart ({totalItems})</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        {cart.length === 0 ? (
          <p className="empty-cart">Your cart is empty<br/>Add some beautiful furniture!</p>
        ) : (
          <>
            <div className="cart-items">
              {cart.map(item => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} />
                  <div className="cart-item-info">
                    <h4>{item.name}</h4>
                    <p className="cart-item-price">₦{item.price.toLocaleString()}</p>
                    <div className="qty-controls">
                      <button onClick={() => updateQty(item.id, item.qty - 1)}>-</button>
                      <span>{item.qty}</span>
                      <button onClick={() => updateQty(item.id, item.qty + 1)}>+</button>
                    </div>
                    <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-footer">
              <div className="cart-total">
                <span>Subtotal:</span>
                <span>₦{cartTotal.toLocaleString()}</span>
              </div>
              <button className="btn checkout-btn" onClick={onCheckout}>Proceed to Checkout</button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}