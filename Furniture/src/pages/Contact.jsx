import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState(""); // 

  const phoneNumber = "2347025757456"; 
  const email = "oluwaseyijohn2005@gmail.com";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/xaqrpwak", {
      method: "POST",
      body: data,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
    }
  }

  return (
    <div className="contact-page">
      <h1 className="section-title">Get In Touch</h1>
      <p className="subtitle">Have a question? We'd love to hear from you.</p>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Visit Our Showroom</h3>
          <p>123 Challenge Road, Ilorin, Kwara State, Nigeria</p>
          
          {/* CLICKABLE CONTACTS */}
          <div className="contact-detail">
            <strong>Email:</strong> <a href={`mailto:${email}`} style={{color: 'inherit', textDecoration: 'underline'}}>{email}</a>
          </div>
          
          <div className="contact-detail">
            <strong>Phone:</strong> <a href="tel:+2348012345678" style={{color: 'inherit', textDecoration: 'underline'}}>+234 801 234 5678</a>
          </div>

          {/* WHATSAPP BUTTON */}
          <a 
            href={`https://wa.me/${phoneNumber}?text=Hello%20FurniLux!%20I%20saw%20your%20website%20and%20I%20want%20to%20ask%20about%20furniture.`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
            style={{display: 'inline-block', marginTop: '15px', background: '#25D366', textDecoration: 'none', textAlign: 'center'}}
          >
            💬 Chat on WhatsApp
          </a>

          <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600" className="contact-img" />
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <input type="text" name="subject" placeholder="Subject" required />
          <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
          
          <button type="submit" className="btn">Send Message</button>

          {status === "success" && <p className="success-msg">Message sent! We'll reply to your Gmail soon.</p>}
          {status === "error" && <p style={{color: 'red'}}>Oops! Something went wrong.</p>}
        </form>
      </div>
    </div>
  )
}