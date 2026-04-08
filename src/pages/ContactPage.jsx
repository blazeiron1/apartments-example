import { useState } from "react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const offices = [
  {
    name: "Main Office",
    address: "12 Real Estate Ave, New York, NY 10001",
    phone: "(555) 123-4567",
    email: "hello@apartafind.com",
    hours: "Mon–Fri: 9am–6pm\nSat: 10am–4pm\nSun: Closed",
  },
  {
    name: "Brooklyn Branch",
    address: "88 Atlantic Ave, Brooklyn, NY 11217",
    phone: "(555) 987-6543",
    email: "brooklyn@apartafind.com",
    hours: "Mon–Fri: 10am–5pm\nSat: 10am–3pm\nSun: Closed",
  },
];

const faqs = [
  { q: "How do I schedule a viewing?", a: "Open any apartment listing and click 'Schedule a Viewing'. You can pick a date and time that suits you, and we'll confirm within a few hours." },
  { q: "Are there any fees for using ApartaFind?", a: "Browsing and scheduling viewings are completely free. We only charge a one-time placement fee once you sign a lease, and it's always disclosed upfront." },
  { q: "How quickly can I move in?", a: "For apartments marked 'Available Now', move-in can sometimes happen within a week. We handle all paperwork digitally to make it as fast as possible." },
  { q: "Can I list my own property?", a: "Yes! Get in touch through this form or call us. We'll walk you through the listing process and verify your property at no upfront cost." },
  { q: "What areas do you cover?", a: "We currently cover all five boroughs of New York City. We're actively expanding to other major US cities — sign up for our newsletter to be notified." },
];

function AnimatedSection({ children, className = "", animClass = "animate", delay = "" }) {
  const [ref, visible] = useScrollAnimation();
  return (
    <div ref={ref} className={`${animClass} ${visible ? "in-view" : ""} ${delay} ${className}`}>
      {children}
    </div>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const [formRef, formVisible] = useScrollAnimation();
  const [faqRef, faqVisible] = useScrollAnimation();

  function handleChange(e) { setForm({ ...form, [e.target.name]: e.target.value }); }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <section className="page-hero">
        <div className="page-hero-inner">
          <p className="section-eyebrow">Get In Touch</p>
          <h1 className="page-hero-title">We'd Love to Hear From You</h1>
          <p className="page-hero-subtitle">
            Whether you're looking for your next apartment, want to list your property, or just
            have a question — our team is ready to help.
          </p>
        </div>
      </section>

      {/* ── Contact Grid ── */}
      <section className="section">
        <div className="section-inner contact-grid">
          {/* Form */}
          <div
            ref={formRef}
            className={`animate-left ${formVisible ? "in-view" : ""} contact-form-wrap`}
          >
            <h2 className="contact-form-title">Send Us a Message</h2>
            {!submitted ? (
              <form className="contact-form-full" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <input className="form-input" type="text" name="name" placeholder="John Smith" value={form.name} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email Address *</label>
                    <input className="form-input" type="email" name="email" placeholder="john@example.com" value={form.email} onChange={handleChange} required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Phone Number</label>
                    <input className="form-input" type="tel" name="phone" placeholder="(555) 000-0000" value={form.phone} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Subject *</label>
                    <select className="form-input" name="subject" value={form.subject} onChange={handleChange} required>
                      <option value="">Select a topic</option>
                      <option value="viewing">Schedule a Viewing</option>
                      <option value="listing">List My Property</option>
                      <option value="question">General Question</option>
                      <option value="support">Support / Issue</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Message *</label>
                  <textarea className="form-input form-textarea" name="message" placeholder="Tell us how we can help..." value={form.message} onChange={handleChange} rows={6} required />
                </div>
                <button type="submit" className="btn btn-primary btn-full">Send Message →</button>
                <p className="form-note">We typically respond within 1 business day. For urgent matters, call us directly.</p>
              </form>
            ) : (
              <div className="form-success-lg">
                <div className="form-success-icon">✅</div>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. One of our team members will get back to you within 1 business day.</p>
                <button className="btn btn-primary" onClick={() => setSubmitted(false)}>Send Another Message</button>
              </div>
            )}
          </div>

          {/* Office Info */}
          <div className={`animate-right ${formVisible ? "in-view" : ""} contact-info-col`}>
            {offices.map((office) => (
              <div key={office.name} className="office-card">
                <h3 className="office-name">{office.name}</h3>
                <ul className="office-details">
                  <li><span className="office-icon">📍</span><span>{office.address}</span></li>
                  <li><span className="office-icon">📞</span><a href={`tel:${office.phone.replace(/\D/g, "")}`}>{office.phone}</a></li>
                  <li><span className="office-icon">✉️</span><a href={`mailto:${office.email}`}>{office.email}</a></li>
                  <li><span className="office-icon">🕐</span><span style={{ whiteSpace: "pre-line" }}>{office.hours}</span></li>
                </ul>
              </div>
            ))}
            <div className="social-card">
              <h3>Follow Us</h3>
              <div className="social-links">
                <a href="#" className="social-link">Facebook</a>
                <a href="#" className="social-link">Instagram</a>
                <a href="#" className="social-link">Twitter</a>
                <a href="#" className="social-link">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Map ── */}
      <section className="map-section">
        <div className="map-placeholder">
          <span>📍</span>
          <p>12 Real Estate Ave, New York, NY 10001</p>
          <p className="map-note">Interactive map would be embedded here (Google Maps / Mapbox)</p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section section-alt">
        <div className="section-inner">
          <div ref={faqRef} className={`animate section-header centered ${faqVisible ? "in-view" : ""}`}>
            <p className="section-eyebrow">FAQ</p>
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={`delay-${(i % 5) + 1}`}>
                <div
                  className={`faq-item ${openFaq === i ? "faq-open" : ""}`}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <div className="faq-question">
                    <span>{faq.q}</span>
                    <span className="faq-arrow">▼</span>
                  </div>
                  {openFaq === i && <div className="faq-answer">{faq.a}</div>}
                </div>
              </AnimatedSection>
            ))}
          </div>
          <p className="faq-footer">
            Still have questions? <Link to="/contact">Contact our team</Link> and we'll be happy to help.
          </p>
        </div>
      </section>
    </>
  );
}
