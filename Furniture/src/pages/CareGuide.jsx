export default function CareGuide({ setPage }) {
  return (
    <div className="care-guide-page">
      <h2 className="section-title">Furniture Care Guide</h2>
      <p className="subtitle">Keep your FurniLux pieces looking beautiful for years</p>

      <div className="care-grid">
        <div className="care-card">
          <h3>🪵 Wood Furniture</h3>
          <ul>
            <li>Dust weekly with a soft, dry cloth</li>
            <li>Use wood polish every 3 months</li>
            <li>Avoid direct sunlight and water spills</li>
            <li>Use coasters for drinks and hot items</li>
          </ul>
        </div>

        <div className="care-card">
          <h3>🛋️ Fabric & Velvet Sofas</h3>
          <ul>
            <li>Vacuum weekly to remove dust</li>
            <li>Blot spills immediately - don't rub</li>
            <li>Professional cleaning every 12 months</li>
            <li>Rotate cushions monthly for even wear</li>
          </ul>
        </div>

        <div className="care-card">
          <h3>🪑 Leather</h3>
          <ul>
            <li>Wipe with damp cloth weekly</li>
            <li>Condition leather every 6 months</li>
            <li>Keep away from heat sources</li>
            <li>Treat stains with leather cleaner only</li>
          </ul>
        </div>

        <div className="care-card">
          <h3>🍽️ Dining Tables</h3>
          <ul>
            <li>Use table cloths and placemats</li>
            <li>Clean spills immediately</li>
            <li>Avoid dragging items across surface</li>
            <li>Oil wooden tables every 6 months</li>
          </ul>
        </div>

        <div className="care-card">
          <h3>🛏️ Beds & Mattresses</h3>
          <ul>
            <li>Rotate mattress every 3 months</li>
            <li>Use mattress protector</li>
            <li>Vacuum bed frame monthly</li>
            <li>Tighten screws every 6 months</li>
          </ul>
        </div>

        <div className="care-card">
          <h3>✨ General Tips</h3>
          <ul>
            <li>Keep furniture away from windows</li>
            <li>Use felt pads under legs</li>
            <li>Avoid harsh chemical cleaners</li>
            <li>Contact us for repair services</li>
          </ul>
        </div>
      </div>

      <div className="care-cta">
        <h3>Need help with a specific piece?</h3>
        <p>Our team is here to help you maintain your furniture</p>
        <button className="btn" onClick={() => setPage("contact")}>Contact Support</button>
      </div>
    </div>
  );
}