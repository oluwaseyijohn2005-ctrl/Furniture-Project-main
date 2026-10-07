export default function Footer({ setPage, setCategory }) {
  const handleFooterLink = (page, cat = null) => {
    setPage(page);
    if(cat) setCategory(cat);
    window.scrollTo(0, 0);
  }
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-col">
          <h3>FurniLux</h3>
          <p>Premium furniture for modern Nigerian homes.</p>
        </div>
        <div className="footer-col">
          <h4>Shop</h4>
          <button onClick={() => handleFooterLink("products", "all")}>All Products</button>
          <button onClick={() => handleFooterLink("products", "living")}>Living Room</button>
          <button onClick={() => handleFooterLink("products", "bedroom")}>Bedroom</button>
          <button onClick={() => handleFooterLink("products", "dining")}>Dining</button>
        </div>
        <div className="footer-col">
          <h4>Company</h4>
          <button onClick={() => handleFooterLink("about")}>About</button>
          <button onClick={() => handleFooterLink("contact")}>Contact</button>
          <button onClick={() => handleFooterLink("care")}>Care Guide</button>
        </div>
      </div>
      <p className="copyright">© 2026 FurniLux. Made in Ilorin.</p>
    </footer>
  )
}