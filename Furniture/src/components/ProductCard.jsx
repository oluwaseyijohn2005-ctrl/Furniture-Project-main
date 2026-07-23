export default function ProductDrawer({ product, onClose, onAdd }) {
  if (!product) return null;

  return (
    <div style={{
      position: 'fixed', top: 0, right: 0, bottom: 0, left: 0,
      background: 'rgba(0,0,0,0.6)', zIndex: 1000,
      display: 'flex', justifyContent: 'flex-end'
    }} onClick={onClose}>
      
      <div style={{
        width: '500px', background: '#FDFBF7', padding: '40px',
        overflowY: 'auto', animation: 'slideIn 0.3s'
      }} onClick={(e) => e.stopPropagation()}>
        
        <button onClick={onClose} style={{
          background: 'none', border: 'none', fontSize: '30px', 
          position: 'absolute', right: '20px', cursor: 'pointer'
        }}>×</button>

        <img src={product.image} alt={product.name} style={{
          width: '100%', height: '300px', objectFit: 'cover', borderRadius: '12px', marginBottom: '20px'
        }}/>

        <h2 style={{fontSize: '32px', marginBottom: '10px'}}>{product.name}</h2>
        <p style={{fontSize: '28px', color: '#C9A961', fontWeight: '600', marginBottom: '20px'}}>
          ${product.price}
        </p>
        
        <p style={{lineHeight: '1.8', marginBottom: '20px', color: '#555'}}>
          {product.description || "This premium piece is crafted with high-quality materials and timeless design. Perfect for modern homes."}
        </p>

        <div style={{marginBottom: '30px'}}>
          <p><strong>Material:</strong> {product.material || "Premium Wood"}</p>
          <p><strong>Dimensions:</strong> {product.dimensions || "W: 180cm x D: 90cm x H: 75cm"}</p>
          <p><strong>Category:</strong> {product.category}</p>
        </div>

        <button className="btn" style={{width: '100%', fontSize: '18px'}} onClick={() => onAdd(product)}>
          Add to Cart - ${product.price}
        </button>
      </div>

      <style>{`@keyframes slideIn {from {transform: translateX(100%)} to {transform: translateX(0)}}`}</style>
    </div>
  );
}