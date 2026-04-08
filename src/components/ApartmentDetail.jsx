import { useState } from "react";

export default function ApartmentDetail({ apt, onBack }) {
  const [activeImg, setActiveImg] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="detail-page">
      <button className="btn btn-back" onClick={onBack}>
        ← Back to listings
      </button>

      <div className="detail-hero">
        <img className="detail-main-img" src={apt.images[activeImg]} alt={apt.title} />
        <div className="detail-thumbs">
          {apt.images.map((img, i) => (
            <img
              key={i}
              className={`detail-thumb ${i === activeImg ? "active" : ""}`}
              src={img}
              alt={`view ${i + 1}`}
              onClick={() => setActiveImg(i)}
            />
          ))}
        </div>
      </div>

      <div className="detail-content">
        <div className="detail-left">
          <div className="detail-header">
            <div>
              <h1 className="detail-title">{apt.title}</h1>
              <p className="detail-address">📍 {apt.address}</p>
              <div className="detail-rating">
                ⭐ {apt.rating} · {apt.reviews} reviews
              </div>
            </div>
            <div className="detail-price-box">
              <span className="detail-price">${apt.price.toLocaleString()}</span>
              <span className="detail-price-label">/month</span>
            </div>
          </div>

          <div className="detail-stats-row">
            <div className="detail-stat">
              <span className="stat-icon">🛏</span>
              <span>{apt.beds > 0 ? `${apt.beds} Bedroom${apt.beds > 1 ? "s" : ""}` : "Studio"}</span>
            </div>
            <div className="detail-stat">
              <span className="stat-icon">🚿</span>
              <span>{apt.baths} Bathroom{apt.baths > 1 ? "s" : ""}</span>
            </div>
            <div className="detail-stat">
              <span className="stat-icon">📐</span>
              <span>{apt.sqft} sqft</span>
            </div>
            <div className="detail-stat">
              <span className="stat-icon">📅</span>
              <span>{apt.available === "Now" ? "Available Now" : `From ${apt.available}`}</span>
            </div>
          </div>

          <div className="detail-section">
            <h2>About this apartment</h2>
            <p>{apt.description}</p>
          </div>

          <div className="detail-section">
            <h2>Amenities</h2>
            <div className="detail-amenities">
              {apt.amenities.map((a) => (
                <span key={a} className="amenity-tag amenity-tag-lg">{a}</span>
              ))}
            </div>
          </div>

          <div className="detail-section">
            <h2>Property details</h2>
            <div className="detail-props">
              <div className="detail-prop">
                <span>Pet Friendly</span>
                <span>{apt.petFriendly ? "✅ Yes" : "❌ No"}</span>
              </div>
              <div className="detail-prop">
                <span>Parking</span>
                <span>{apt.parking ? "✅ Included" : "❌ Not available"}</span>
              </div>
              <div className="detail-prop">
                <span>Furnished</span>
                <span>{apt.furnished ? "✅ Yes" : "❌ Unfurnished"}</span>
              </div>
              <div className="detail-prop">
                <span>Type</span>
                <span>{apt.type}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="detail-right">
          <div className="contact-card">
            <h3>Interested in this apartment?</h3>
            {!showForm && !submitted && (
              <button className="btn btn-primary btn-full" onClick={() => setShowForm(true)}>
                Schedule a Viewing
              </button>
            )}
            {showForm && !submitted && (
              <form className="contact-form" onSubmit={handleSubmit}>
                <input
                  className="form-input"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
                <input
                  className="form-input"
                  type="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
                <textarea
                  className="form-input form-textarea"
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                />
                <button type="submit" className="btn btn-primary btn-full">Send Request</button>
                <button type="button" className="btn btn-ghost btn-full" onClick={() => setShowForm(false)}>Cancel</button>
              </form>
            )}
            {submitted && (
              <div className="form-success">
                <span>✅</span>
                <p>Your viewing request has been sent! We'll get back to you shortly.</p>
              </div>
            )}
            <div className="contact-divider">or call us at</div>
            <a className="contact-phone" href="tel:+15551234567">📞 (555) 123-4567</a>
          </div>
        </div>
      </div>
    </div>
  );
}
