import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <span>🏠</span>
              <span>ApartaFind</span>
            </div>
            <p className="footer-tagline">
              Helping people find their perfect home since 2018. Browse hundreds of verified
              listings and move in with confidence.
            </p>
            <div className="footer-socials">
              <a href="#" aria-label="Facebook">Facebook</a>
              <a href="#" aria-label="Instagram">Instagram</a>
              <a href="#" aria-label="Twitter">Twitter</a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/apartments">Browse Apartments</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Apartment Types</h4>
            <ul>
              <li><Link to="/apartments">Studio Apartments</Link></li>
              <li><Link to="/apartments">1 Bedroom</Link></li>
              <li><Link to="/apartments">2 Bedrooms</Link></li>
              <li><Link to="/apartments">3+ Bedrooms</Link></li>
              <li><Link to="/apartments">Penthouses</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact Us</h4>
            <ul className="footer-contact-list">
              <li>
                <span>📍</span>
                <span>12 Real Estate Ave,<br />New York, NY 10001</span>
              </li>
              <li>
                <span>📞</span>
                <a href="tel:+15551234567">(555) 123-4567</a>
              </li>
              <li>
                <span>✉️</span>
                <a href="mailto:hello@apartafind.com">hello@apartafind.com</a>
              </li>
              <li>
                <span>🕐</span>
                <span>Mon–Fri 9am–6pm<br />Sat 10am–4pm</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 <strong>BMITRESKI</strong> · ApartaFind. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
        <div className="footer-copyright-bar">
          © 2026 BMITRESKI — All content, design, and intellectual property on this site is the exclusive property of BMITRESKI. Unauthorized reproduction or distribution is prohibited.
        </div>
      </div>
    </footer>
  );
}
