export default function Care() {
  const tips = [
    {title: "Wood Care", desc: "Dust weekly and polish monthly with furniture oil to keep the natural shine."},
    {title: "Fabric Care", desc: "Vacuum upholstery weekly. Blot spills immediately, don't rub."},
    {title: "Leather Care", desc: "Wipe with dry cloth. Condition every 6 months to prevent cracking."},
  ];
  
  return (
    <div className="featured-section">
      <h2 className="section-title">Furniture Care Guide</h2>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px', maxWidth: '1200px', margin: '0 auto'}}>
        {tips.map((tip, i) => (
          <div key={i} style={{background: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.08)'}}>
            <h3 style={{color: '#C9A961', marginBottom: '15px'}}>{tip.title}</h3>
            <p style={{lineHeight: '1.7'}}>{tip.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}