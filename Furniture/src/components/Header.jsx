import { useState } from 'react';

export default function Header({ setPage, setCategory, cartCount, searchQuery, setSearchQuery, setShowCart }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (page, cat = null) => {
    setPage(page);
    if(cat) setCategory(cat);
    setMenuOpen(false); // close menu after clicking
  }

  return (
    <header className="header">
      <h1 className="logo" onClick={() => handleNav("home")}>FurniLux</h1>

      {/* HAMBURGER BUTTON */}
      <button className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* NAV */}
      <nav className={`nav ${menuOpen ? 'active' : ''}`}>
        <button onClick={() => handleNav("home")}>Home</button>
        <button onClick={() => handleNav("products", "all")}>Shop</button>
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