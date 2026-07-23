export default function Footer({ setPage }) {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Column 1 */}
        <div>
          <h4>FurniLux</h4>
          <p style={{lineHeight: '1.7', marginBottom: '15px'}}>
            Design Your Dream Home with modern, timeless furniture. Proudly serving Ilorin and Nigeria.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h4>Shop</h4>
          <button onClick={() => {setPage("products")}}>All Products</button>
          <button onClick={() => {setPage("products")}}>Living Room</button>
          <button onClick={() => {setPage("products")}}>Bedroom</button>
          <button onClick={() => {setPage("products")}}>Dining</button>
        </div>

        {/* Column 3 */}
        <div>
          <h4>Company</h4>
          <button onClick={() => setPage("about")}>About Us</button>
          <button onClick={() => setPage("contact")}>Contact</button>
          <button onClick={() => setPage("care")}>Customer Care</button>
          <button>Privacy Policy</button>
        </div>

        {/* Column 4 */}
        <div>
          <h4>Get In Touch</h4>
          <p>📍 GRA, Ilorin, Kwara State</p>
          <p>📞 0901 234 5678</p>
          <p>✉️ support@furnilux.ng</p>
          <p>🕒 Mon - Sat: 9am - 6pm</p>
        </div>
      </div>
      
      <div style={{textAlign: 'center', marginTop: '40px', paddingTop: '20px', borderTop: '1px solid #444'}}>
        © 2026 FurniLux. All rights reserved. Made with ❤️ in Ilorin
      </div>
    </footer>
  );
}