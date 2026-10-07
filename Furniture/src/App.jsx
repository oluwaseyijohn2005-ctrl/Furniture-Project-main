import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';
import About from './pages/About';
import CareGuide from './pages/CareGuide';
import ProductDrawer from './components/ProductDrawer';
import CartDrawer from './components/CartDrawer';
import CheckoutModal from './components/CheckoutModal';
import './App.css'

export default function App() {
  const [page, setPage] = useState("home");
  const [category, setCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);

  const cartTotal = cart.reduce((a, b) => a + (b.price * b.qty), 0);

  useEffect(() => {
    setTimeout(() => {
      setProducts([
        {id: 1, name: "Velvet Lounge Sofa", price: 450000, category: "living", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600"},
        {id: 2, name: "King Oak Bed", price: 600000, category: "bedroom", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600"},
        {id: 3, name: "Marble Dining Table", price: 350000, category: "dining", image: "https://images.unsplash.com/photo-1551298370-9d3d53740c72?w=600"},
        {id: 4, name: "Accent Armchair", price: 120000, category: "living", image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=600"},
        {id: 5, name: "Wooden Bookshelf", price: 180000, category: "living", image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=600"},
        {id: 6, name: "Ceramic Vase Set", price: 45000, category: "living", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600"},
        {id: 7, name: "Sectional Sofa", price: 750000, category: "living", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600"},
        {id: 8, name: "Dining Chair Set", price: 200000, category: "dining", image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=600"},
      ]);
      setLoading(false);
    }, 800);
  }, []);

  const addToCart = (product) => {
    setCart(prev => {
      const exist = prev.find(p => p.id === product.id);
      if(exist) return prev.map(p => p.id === product.id ? {...p, qty: p.qty + 1} : p);
      return [...prev, {...product, qty: 1}];
    });
  };

  const updateQty = (id, qty) => {
    if(qty < 1) return;
    setCart(prev => prev.map(p => p.id === id ? {...p, qty} : p));
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(p => p.id !== id));
  };

  return (
    <div>
      <Header 
        cartCount={cart.reduce((a, b) => a + b.qty, 0)} 
        setPage={setPage}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setCategory={setCategory}
        setShowCart={setShowCart}
      />

      {loading ? <div className="loading">Loading FurniLux...</div> : (
        <>
          {page === "home" && 
            <Home 
              products={products} 
              setPage={setPage} 
              setCategory={setCategory} 
              setSelectedProduct={setSelectedProduct}
              addToCart={addToCart}
              setSearchQuery={setSearchQuery}
            />
          }
          {page === "products" && 
            <Products 
              products={products} 
              category={category} 
              searchQuery={searchQuery}
              setSelectedProduct={setSelectedProduct}
              addToCart={addToCart}
            />
          }
          {page === "about" && <About setPage={setPage} />}
          {page === "care" && <CareGuide setPage={setPage} />}
          {page === "contact" && <Contact />}
        </>
      )}

      {selectedProduct && 
        <ProductDrawer 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)}
          addToCart={addToCart}
        />
      }
      
      {showCart && 
        <CartDrawer 
          cart={cart}
          cartTotal={cartTotal}
          onClose={() => setShowCart(false)}
          updateQty={updateQty}
          removeFromCart={removeFromCart}
          onCheckout={() => { setShowCart(false); setShowCheckout(true); }}
        />
      }

      {showCheckout && 
        <CheckoutModal 
          cartTotal={cartTotal}
          onClose={() => setShowCheckout(false)}
          orderSuccess={orderSuccess}
          setOrderSuccess={setOrderSuccess}
          setCart={setCart}
        />
      }

      {/* FIXED: added setCategory */}
      <Footer setPage={setPage} setCategory={setCategory} />
    </div>
  )
}