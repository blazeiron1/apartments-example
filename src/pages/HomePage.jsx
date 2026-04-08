import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apartments } from "../data/apartments";
import ApartmentCard from "../components/ApartmentCard";
import ApartmentDetail from "../components/ApartmentDetail";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const stats = [
  { value: "500+", label: "Apartments Listed" },
  { value: "12", label: "Neighborhoods" },
  { value: "2,400+", label: "Happy Tenants" },
  { value: "4.9★", label: "Average Rating" },
];

const features = [
  { icon: "🔍", title: "Easy Search", desc: "Powerful filters let you search by price, size, amenities, and more. Find exactly what you need in seconds." },
  { icon: "✅", title: "Verified Listings", desc: "Every property is personally verified by our team. No fake listings, no surprises — just honest information." },
  { icon: "📅", title: "Instant Viewing", desc: "Schedule apartment viewings directly through the platform, on a date and time that works for you." },
  { icon: "🤝", title: "Dedicated Support", desc: "Our agents are available 6 days a week to help you through every step of your rental journey." },
  { icon: "🏷️", title: "No Hidden Fees", desc: "The price you see is the price you pay. We're fully transparent with all costs upfront." },
  { icon: "🔑", title: "Fast Move-In", desc: "Streamlined paperwork and digital signing means you can get your keys faster than anywhere else." },
];

const testimonials = [
  {
    name: "Sarah M.", role: "Moved in January 2026", avatar: "SM",
    text: "ApartaFind made finding my first apartment so stress-free. I found the perfect 1-bedroom in under a week. The team was incredibly helpful throughout the whole process.",
    rating: 5,
  },
  {
    name: "James K.", role: "Moved in March 2026", avatar: "JK",
    text: "I was moving from another city and needed to find a place quickly. The virtual tours and verified photos meant I could trust what I was seeing. Signed the lease remotely — amazing!",
    rating: 5,
  },
  {
    name: "Elena R.", role: "Moved in February 2026", avatar: "ER",
    text: "Found a great 2-bedroom that fit our budget perfectly. The filters saved us so much time. Highly recommend to anyone apartment hunting in the city.",
    rating: 5,
  },
];

const featured = apartments.slice(0, 3);

function AnimatedSection({ children, className = "", animClass = "animate", delay = "" }) {
  const [ref, visible] = useScrollAnimation();
  return (
    <div ref={ref} className={`${animClass} ${visible ? "in-view" : ""} ${delay} ${className}`}>
      {children}
    </div>
  );
}

export default function HomePage() {
  const [heroQuery, setHeroQuery] = useState("");
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  const [statsRef, statsVisible] = useScrollAnimation();
  const [featRef, featVisible] = useScrollAnimation();
  const [whyRef, whyVisible] = useScrollAnimation();
  const [stepsRef, stepsVisible] = useScrollAnimation();
  const [testRef, testVisible] = useScrollAnimation();

  function handleHeroSearch(e) {
    e.preventDefault();
    navigate("/apartments");
  }

  if (selected) {
    return (
      <main className="main">
        <ApartmentDetail apt={selected} onBack={() => setSelected(null)} />
      </main>
    );
  }

  return (
    <>
      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero-overlay" />
        <div className="hero-ring" />
        <div className="hero-dots">
          <div className="hero-dot" style={{ width:180, height:180, top:"10%", left:"5%", animationDuration:"8s" }} />
          <div className="hero-dot" style={{ width:80, height:80, top:"60%", left:"12%", animationDuration:"6s", animationDelay:"2s" }} />
          <div className="hero-dot" style={{ width:120, height:120, top:"30%", right:"15%", animationDuration:"10s", animationDelay:"1s" }} />
        </div>

        <div className="hero-content">
          <p className="hero-eyebrow">New York's #1 Apartment Finder</p>
          <h1 className="hero-title">
            Find Your Perfect<br />
            <span className="hero-title-accent">Home Today</span>
          </h1>
          <p className="hero-subtitle">
            Browse hundreds of verified apartments and find the one that fits your life.
          </p>
          <form className="hero-search" onSubmit={handleHeroSearch}>
            <input
              className="hero-search-input"
              type="text"
              placeholder="Search by neighborhood, address, or keyword..."
              value={heroQuery}
              onChange={(e) => setHeroQuery(e.target.value)}
            />
            <button type="submit" className="btn btn-accent hero-search-btn">Search</button>
          </form>
          <div className="hero-quick-links">
            <span>Popular:</span>
            <Link to="/apartments">Studio</Link>
            <Link to="/apartments">1 Bedroom</Link>
            <Link to="/apartments">2 Bedrooms</Link>
            <Link to="/apartments">Pet Friendly</Link>
          </div>
        </div>

        <div className="hero-stats-strip">
          <div className="hero-stats-inner">
            {stats.map((s) => (
              <div key={s.label} className="hero-stat">
                <div className="hero-stat-value">{s.value}</div>
                <div className="hero-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <div ref={statsRef} className={`animate ${statsVisible ? "in-view" : ""}`}>
        <section className="stats-bar">
          {stats.map((s) => (
            <div key={s.label} className="stat-item">
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </section>
      </div>

      {/* ── Featured Listings ── */}
      <section className="section">
        <div className="section-inner">
          <div ref={featRef} className={`animate section-header ${featVisible ? "in-view" : ""}`}>
            <div>
              <p className="section-eyebrow">Featured Listings</p>
              <h2 className="section-title">Handpicked Apartments</h2>
            </div>
            <Link to="/apartments" className="btn btn-ghost">View All →</Link>
          </div>
          <div className="apt-grid">
            {featured.map((apt, i) => (
              <AnimatedSection key={apt.id} delay={`delay-${i + 1}`}>
                <ApartmentCard apt={apt} onClick={setSelected} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="section section-alt">
        <div className="section-inner">
          <div ref={whyRef} className={`animate section-header centered ${whyVisible ? "in-view" : ""}`}>
            <p className="section-eyebrow">Why ApartaFind</p>
            <h2 className="section-title">Everything You Need, All in One Place</h2>
            <p className="section-desc">We've simplified the apartment search so you can focus on what matters — finding a home you love.</p>
          </div>
          <div className="features-grid">
            {features.map((f, i) => (
              <AnimatedSection key={f.title} delay={`delay-${(i % 3) + 1}`}>
                <div className="feature-card">
                  <span className="feature-icon">{f.icon}</span>
                  <h3 className="feature-title">{f.title}</h3>
                  <p className="feature-desc">{f.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="section">
        <div className="section-inner">
          <div ref={stepsRef} className={`animate section-header centered ${stepsVisible ? "in-view" : ""}`}>
            <p className="section-eyebrow">Simple Process</p>
            <h2 className="section-title">How It Works</h2>
          </div>
          <div className="steps-row">
            {[
              { num: "1", title: "Search", desc: "Use our filters to narrow down apartments by price, type, size, and amenities." },
              { num: "2", title: "Tour", desc: "Schedule an in-person or virtual viewing directly through the listing page." },
              { num: "3", title: "Apply", desc: "Submit your application online. We handle communication with the landlord." },
              { num: "4", title: "Move In", desc: "Sign your lease digitally and collect your keys. Welcome home!" },
            ].map((s, i) => (
              <AnimatedSection key={s.num} delay={`delay-${i + 1}`}>
                <div className="step">
                  <div className="step-num">{s.num}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="section section-alt">
        <div className="section-inner">
          <div ref={testRef} className={`animate section-header centered ${testVisible ? "in-view" : ""}`}>
            <p className="section-eyebrow">Testimonials</p>
            <h2 className="section-title">What Our Tenants Say</h2>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <AnimatedSection key={t.name} delay={`delay-${i + 1}`}>
                <div className="testimonial-card">
                  <div className="testimonial-stars">{"★".repeat(t.rating)}</div>
                  <p className="testimonial-text">"{t.text}"</p>
                  <div className="testimonial-author">
                    <div className="testimonial-avatar">{t.avatar}</div>
                    <div>
                      <div className="testimonial-name">{t.name}</div>
                      <div className="testimonial-role">{t.role}</div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <AnimatedSection>
        <section className="cta-banner">
          <div className="cta-inner">
            <h2>Ready to Find Your Next Home?</h2>
            <p>Join thousands of happy tenants who found their perfect apartment with ApartaFind.</p>
            <div className="cta-actions">
              <Link to="/apartments" className="btn btn-white">Browse Listings</Link>
              <Link to="/contact" className="btn btn-outline-white">Contact Us</Link>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </>
  );
}
