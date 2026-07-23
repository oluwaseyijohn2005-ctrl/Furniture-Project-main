export default function About({ setPage }) {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About FurniLux</h1>
          <p>Designing timeless furniture for modern Nigerian homes since 2020</p>
        </div>
        <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800" alt="Furniture showroom" />
      </section>

      <section className="about-section">
        <h2 className="section-title">Our Story</h2>
        <p>
          FurniLux was born in Ilorin with one simple mission: bring world-class, 
          modern furniture to Nigerian homes without the import hassle. We believe 
          your home should reflect who you are - elegant, warm, and uniquely yours.
        </p>
        <p>
          Every piece in our collection is carefully selected for quality, comfort, 
          and durability. From cozy velvet sofas to solid oak dining tables, we work 
          with trusted craftsmen to deliver furniture that lasts generations.
        </p>
      </section>

      <section className="about-section values">
        <h2 className="section-title">What We Stand For</h2>
        <div className="values-grid">
          <div className="value-card">
            <h3>✨ Quality First</h3>
            <p>We use only premium materials. No shortcuts. Your furniture should look good in 10 years, not 10 months.</p>
          </div>
          <div className="value-card">
            <h3>🇳🇬 Made for Nigeria</h3>
            <p>Designed for our climate and lifestyle. Furniture that survives humidity, power cuts, and family gatherings.</p>
          </div>
          <div className="value-card">
            <h3>🤝 Customer Love</h3>
            <p>From delivery in GRA Ilorin to after-sales care. We're here even after you buy.</p>
          </div>
        </div>
      </section>

      <section className="about-section">
        <h2 className="section-title">Visit Us</h2>
        <div className="visit-box">
          <p><strong>Address:</strong> GRA, Ilorin, Kwara State</p>
          <p><strong>Phone:</strong> 0901 234 5678</p>
          <p><strong>Email:</strong> support@furnilux.ng</p>
          <p><strong>Hours:</strong> Mon - Sat: 9am - 6pm</p>
          <button className="btn" onClick={() => setPage("contact")}>Get In Touch</button>
        </div>
      </section>
    </div>
  );
}