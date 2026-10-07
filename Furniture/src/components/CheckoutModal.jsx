import { useState } from 'react';

export default function CheckoutModal({ cartTotal, onClose, orderSuccess, setOrderSuccess, setCart }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    card: "",
    expiry: "",
    cvv: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault(); // stops empty submit
    // DEMO MODE - we don't check card for real
    console.log("Demo Order:", { ...form, total: cartTotal });
    setOrderSuccess(true);
    setCart([]);
    setTimeout(() => {
      setOrderSuccess(false);
      onClose();
    }, 3000);
  };

  if (orderSuccess) {
    return (
      <div className="drawer-overlay" onClick={onClose}>
        <div className="product-drawer" style={{textAlign: 'center'}} onClick={e => e.stopPropagation()}>
          <h2 style={{color: '#C9A961', marginBottom: '20px'}}>Order Placed! 🎉</h2>
          <p>We will call you to confirm before delivery</p>
          <p style={{fontSize: '12px', color: '#999', marginTop: '10px'}}>(Demo card {form.card} - no real charge)</p>
        </div>
      </div>
    )
  }

  return (
    <div className="drawer-overlay" onClick={onClose}>
      <div className="product-drawer" onClick={e => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>Checkout</h2>
        <h3 className="price" style={{marginBottom: '25px'}}>Total: ₦{cartTotal.toLocaleString()}</h3>
        
        <form onSubmit={handlePlaceOrder} style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
          <input name="name" required type="text" placeholder="Full Name" className="checkout-input"
            value={form.name} onChange={handleChange} />
          <input name="phone" required type="tel" placeholder="Phone Number" className="checkout-input"
            value={form.phone} onChange={handleChange} />
          <textarea name="address" required placeholder="Delivery Address in Ilorin" rows="3" className="checkout-input"
            value={form.address} onChange={handleChange}></textarea>

          <div style={{borderTop: '1px solid #eee', paddingTop: '15px', marginTop: '5px'}}>
            <label style={{fontSize: '12px', fontWeight: 'bold', color: '#888', letterSpacing: '0.5px'}}>DEMO CARD - NO REAL CHARGE</label>
            <input name="card" type="text" placeholder="Card Number - 4242 4242 4242 4242" className="checkout-input" 
              style={{marginTop: '8px', background: '#f9f9f9'}}
              value={form.card} onChange={handleChange} />
            <div style={{display: 'flex', gap: '10px'}}>
              <input name="expiry" type="text" placeholder="MM/YY" className="checkout-input" style={{background: '#f9f9f9'}}
                value={form.expiry} onChange={handleChange} />
              <input name="cvv" type="text" placeholder="CVV" className="checkout-input" style={{background: '#f9f9f9'}}
                value={form.cvv} onChange={handleChange} />
            </div>
            <p style={{fontSize: '11px', color: '#aaa'}}>Leave test card as is. You won't be charged.</p>
          </div>

          <p style={{fontSize: '13px', color: '#666', margin: '5px 0'}}>We will call you to confirm before delivery</p>

          <button type="submit" className="btn large" style={{width: '100%'}}>
            Place Order - ₦{cartTotal.toLocaleString()}
          </button>
        </form>
      </div>
    </div>
  )
}