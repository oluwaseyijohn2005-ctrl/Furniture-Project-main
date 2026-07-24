import { useState } from 'react';

export default function Header({ setPage, setCategory, cartCount, searchQuery, setSearchQuery, setShowCart }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [shopDropdown, setShopDropdown] = useState(false); // NEW

  const handleNav = (page, cat = null) => {
    setPage(page);
    if(cat) setCategory(cat);
    setMenuOpen(false);
    setShopDropdown(false);
  }

  return (
    <header className="header">
      <h1 className="logo" onClick={() => handleNav("home")}>FurniLux</h1>

      {/* HAMBURGER */}
      <button className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
        <span></span><span></span><span></span>
      </button>

      {/* NAV */}
      <nav className={`nav ${menuOpen ? 'active' : ''}`}>
        <button onClick={() => handleNav("home")}>Home</button>
        
        {/* SHOP DROPDOWN */}
        <div className="dropdown">
          <button onClick={() => setShopDropdown(!shopDropdown)}>Shop ▾</button>
          <div className={`dropdown-content ${shopDropdown ? 'show' : ''}`}>
            <button onClick={() => handleNav("products", "all")}>All Products</button>
            <button onClick={() => handleNav("products", "living")}>Living Room</button>
            <button onClick={() => handleNav("products", "bedroom")}>Bedroom</button>
            <button onClick={() => handleNav("products", "dining")}>Dining</button>
          </div>
        </div>

        <button onClick={() => handleNav("about")}>About</button>
        <button onClick={() => handleNav("care")}>Care Guide</button>
        <button onClick={() => handleNav("contact")}>Contact</button>
      </nav>

      <div className="header-actions">
        <input 
          type="text" 
          placeholder="Search..." 
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setPage("products");
          }}
          className="search-bar"
        />
        <button className="cart-icon" onClick={() => setShowCart(true)}>
          🛒 {cartCount}
        </button>
      </div>
    </header>
  );
}