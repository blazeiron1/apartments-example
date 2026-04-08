export default function ApartmentCard({ apt, onClick }) {
  return (
    <div className="apt-card" onClick={() => onClick(apt)}>
      <div className="apt-card-image">
        <img src={apt.image} alt={apt.title} />
        <span className="apt-badge">{apt.available === "Now" ? "Available Now" : `From ${apt.available}`}</span>
        {apt.furnished && <span className="apt-badge apt-badge-green">Furnished</span>}
      </div>
      <div className="apt-card-body">
        <div className="apt-card-top">
          <h3 className="apt-title">{apt.title}</h3>
          <span className="apt-price">${apt.price.toLocaleString()}<small>/mo</small></span>
        </div>
        <p className="apt-address">📍 {apt.address}</p>
        <div className="apt-stats">
          {apt.beds > 0 ? (
            <span>🛏 {apt.beds} bed{apt.beds > 1 ? "s" : ""}</span>
          ) : (
            <span>🛏 Studio</span>
          )}
          <span>🚿 {apt.baths} bath{apt.baths > 1 ? "s" : ""}</span>
          <span>📐 {apt.sqft} sqft</span>
        </div>
        <div className="apt-amenities">
          {apt.amenities.slice(0, 3).map((a) => (
            <span key={a} className="amenity-tag">{a}</span>
          ))}
          {apt.amenities.length > 3 && (
            <span className="amenity-tag amenity-more">+{apt.amenities.length - 3}</span>
          )}
        </div>
        <div className="apt-footer">
          <span className="apt-rating">⭐ {apt.rating} ({apt.reviews} reviews)</span>
          <div className="apt-icons">
            {apt.petFriendly && <span title="Pet Friendly">🐾</span>}
            {apt.parking && <span title="Parking">🚗</span>}
          </div>
        </div>
      </div>
    </div>
  );
}
