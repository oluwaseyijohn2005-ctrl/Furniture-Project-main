export default function Home({ products, setPage, setCategory, setSelectedProduct, addToCart, setSearchQuery }) {
  const featured = products.slice(0, 4);
  
  const categories = [
    {name: "sofa", img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600"},
    {name: "bed", img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600"},
    {name: "dining", img: "https://images.unsplash.com/photo-1551298370-9d3d53740c72?w=600"},
    {name: "chair", img: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=600"},
    {name: "storage", img: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=600"},
    {name: "decor", img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600"},
  ];

  return (
    <div>
      <section className="hero">
        <div className="hero-content">
          <h1>Design Your Dream Home</h1>
          <p>Curated furniture pieces that bring warmth and elegance to every space</p>
          <button className="btn" onClick={() => { 
            setPage("products"); 
            setCategory("all"); 
            setSearchQuery(""); 
          }}>
            Shop Collection
          </button>
        </div>
        <div className="hero-image">
          <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800" alt="Living Room" />
        </div>
      </section>

      <section className="featured-section">
        <h2 className="section-title">Featured Pieces</h2>
        <div className="product-grid">
          {featured.map(product => (
            <div key={product.id} className="product-card" style={{cursor: 'pointer'}}>
              <img 
                src={product.image} 
                alt={product.name} 
                onClick={() => setSelectedProduct(product)}
              />
              <div className="product-info">
                <h3 onClick={() => setSelectedProduct(product)}>{product.name}</h3>
                <p className="price">₦{product.price.toLocaleString()}</p>
                <button 
                  className="add-btn" 
                  onClick={(e) => {e.stopPropagation(); addToCart(product)}}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="categories-grid">
        {categories.map(cat => (
          <div key={cat.name} className="category-card" onClick={() => { 
            setPage("products"); 
            setCategory(cat.name); 
            setSearchQuery(""); 
          }}>
            <img src={cat.img} alt={cat.name} loading="lazy" />
            <h3>{cat.name.charAt(0).toUpperCase() + cat.name.slice(1)}</h3>
          </div>
        ))}
      </section>
    </div>
  );
}