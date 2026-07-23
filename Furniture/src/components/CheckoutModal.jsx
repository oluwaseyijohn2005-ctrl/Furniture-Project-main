export default function CheckoutModal({ cartTotal, onClose, orderSuccess, setOrderSuccess, setCart }) {
  const handlePlaceOrder = () => {
    setOrderSuccess(true);
    setCart([]);
    setTimeout(() => {
      setOrderSuccess(false);
      onClose();
    }, 3000);
  }

  if (orderSuccess) {
    return (
      <div className="drawer-overlay" onClick={onClose}>
        <div className="product-drawer" style={{textAlign: 'center'}} onClick={e => e.stopPropagation()}>
          <h2 style={{color: '#C9A961', marginBottom: '20px'}}>Order Placed! 🎉</h2>
          <p>We will call you to confirm before delivery</p>
        </div>
      </div>
    )
  }

  return (
    <div className="drawer-overlay" onClick={onClose}>
      <div className="product-drawer" onClick={e => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>Checkout</h2>
        <h3 className="price" style={{marginBottom: '30px'}}>Total: ₦{cartTotal.toLocaleString()}</h3>
        
        <div style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
          <input type="text" placeholder="Full Name" className="checkout-input"/>
          <input type="tel" placeholder="Phone Number" className="checkout-input"/>
          <textarea placeholder="Delivery Address in Ilorin" rows="4" className="checkout-input"></textarea>
        </div>

        <p style={{fontSize: '14px', color: '#666', margin: '20px 0'}}>We will call you to confirm before delivery</p>

        <button className="btn large" style={{width: '100%'}} onClick={handlePlaceOrder}>
          Place Order
        </button>
      </div>
    </div>
  )
}