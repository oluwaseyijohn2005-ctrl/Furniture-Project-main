import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState(""); // "", "success", "error"

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/xaqrpwak", { // <-- PASTE YOUR FORM ID HERE
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
          <div className="contact-detail"><strong>Email:</strong> support@furnilux.ng</div>
          <div className="contact-detail"><strong>Phone:</strong> +234 801 234 5678</div>
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