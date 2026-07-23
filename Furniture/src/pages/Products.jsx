export default function Products({ products = [], category = "all", searchQuery = "", setSelectedProduct, addToCart }) {
  
  const filteredProducts = products.filter(product => {
    const matchesCategory = category === "all" || product.category === category;
    
    // UPDATED: search by both name AND category
    const matchesSearch = 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="featured-section" style={{padding: '80px 40px', minHeight: '60vh'}}>
      <h2 className="section-title">
        {category === "all" ? "All Products" : category.charAt(0).toUpperCase() + category.slice(1)}
      </h2>

      {/* Show what user searched for */}
      {searchQuery && (
        <p style={{textAlign: 'center', marginBottom: '20px', color: '#666'}}>
          Showing results for: <strong>"{searchQuery}"</strong>
        </p>
      )}

      {products.length === 0 ? (
        <p style={{textAlign: 'center', padding: '60px'}}>Loading products...</p>
      ) : filteredProducts.length === 0 ? (
        <p style={{textAlign: 'center', padding: '60px'}}>No products found for "{searchQuery}"</p>
      ) : (
        <div className="product-grid">
          {filteredProducts.map(product => (
            <div key={product.id} className="product-card">
              <img 
                src={product.image} 
                alt={product.name} 
                onClick={() => setSelectedProduct(product)}
                style={{cursor: 'pointer'}}
              />
              <div className="product-info">
                <h3 onClick={() => setSelectedProduct(product)} style={{cursor: 'pointer'}}>{product.name}</h3>
                <p className="price">₦{product.price.toLocaleString()}</p>
                <button className="add-btn" onClick={() => addToCart(product)}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}