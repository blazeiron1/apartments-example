import { Link } from "react-router-dom";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const values = [
  { icon: "🏡", title: "Home First", desc: "We believe everyone deserves a safe and comfortable place to call home. Every decision we make is guided by that belief." },
  { icon: "🔍", title: "Transparency", desc: "No hidden fees, no misleading photos, no surprise clauses. We show you the full picture before you commit to anything." },
  { icon: "🤝", title: "Trust", desc: "We verify every listing and every landlord. Our reputation is built on people being able to trust what they find on our platform." },
  { icon: "⚡", title: "Speed", desc: "We've streamlined the entire rental process so you can find, apply, and move into your new home faster than ever before." },
];

const team = [
  { name: "Michael Torres", role: "CEO & Co-Founder", bio: "Former real estate agent with 12 years of experience. Michael started ApartaFind after seeing firsthand how broken the apartment search process was.", avatar: "MT" },
  { name: "Anna Kovacs", role: "Head of Operations", bio: "Anna oversees all property verification and landlord relations. Her background in property management ensures every listing meets our quality standards.", avatar: "AK" },
  { name: "David Chen", role: "Lead Developer", bio: "David built the platform from the ground up. His focus on simplicity and speed has made ApartaFind one of the fastest apartment search tools available.", avatar: "DC" },
  { name: "Sophie Nilsson", role: "Customer Success", bio: "Sophie leads our support team and makes sure every tenant has a smooth journey from first search to getting their keys.", avatar: "SN" },
];

const milestones = [
  { year: "2018", event: "ApartaFind launched with 50 listings in Manhattan" },
  { year: "2019", event: "Expanded to all 5 boroughs, surpassed 500 listings" },
  { year: "2021", event: "Introduced virtual tours and digital lease signing" },
  { year: "2023", event: "Reached 2,000 happy tenants placed in new homes" },
  { year: "2025", event: "Launched mobile app with real-time availability alerts" },
  { year: "2026", event: "Over 500 active listings and growing" },
];

function AnimatedSection({ children, className = "", animClass = "animate", delay = "" }) {
  const [ref, visible] = useScrollAnimation();
  return (
    <div ref={ref} className={`${animClass} ${visible ? "in-view" : ""} ${delay} ${className}`}>
      {children}
    </div>
  );
}

export default function AboutPage() {
  const [missionRef, missionVisible] = useScrollAnimation();
  const [valuesRef, valuesVisible] = useScrollAnimation();
  const [timelineRef, timelineVisible] = useScrollAnimation();
  const [teamRef, teamVisible] = useScrollAnimation();

  return (
    <>
      <section className="page-hero">
        <div className="page-hero-inner">
          <p className="page-copyright-badge">© BMITRESKI</p>
          <p className="section-eyebrow">About Us</p>
          <h1 className="page-hero-title">We Help People Find Home</h1>
          <p className="page-hero-subtitle">
            ApartaFind was built by people who struggled to find a good apartment and decided to do
            something about it. Since 2018, we've helped thousands of New Yorkers find the right
            place at the right price.
          </p>
        </div>
      </section>

      {/* ── Mission ── */}
      <section className="section">
        <div className="section-inner about-mission">
          <div
            ref={missionRef}
            className={`animate-left ${missionVisible ? "in-view" : ""} about-mission-text`}
          >
            <p className="section-eyebrow">Our Mission</p>
            <h2 className="section-title">Making Renting Simple, Honest, and Fair</h2>
            <p className="about-body" style={{ marginTop: 16 }}>
              The rental market can be overwhelming — confusing listings, unresponsive landlords,
              and unexpected fees are all too common. We set out to change that. ApartaFind is built
              on the idea that finding a home should be straightforward, not stressful.
            </p>
            <p className="about-body">
              Every listing on our platform is manually reviewed by our team. Every price is the real
              price. Every photo is from the actual unit. We hold ourselves to a high standard because
              we know you're making one of the most important decisions in your life.
            </p>
            <Link to="/apartments" className="btn btn-primary" style={{ marginTop: "20px", display: "inline-flex" }}>
              Browse Listings →
            </Link>
          </div>
          <div className={`animate-right ${missionVisible ? "in-view" : ""} about-mission-image`}>
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=700&q=85"
              alt="Modern apartment building"
            />
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="section section-alt">
        <div className="section-inner">
          <div ref={valuesRef} className={`animate section-header centered ${valuesVisible ? "in-view" : ""}`}>
            <p className="section-eyebrow">Our Values</p>
            <h2 className="section-title">What We Stand For</h2>
          </div>
          <div className="features-grid">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={`delay-${(i % 3) + 1}`}>
                <div className="feature-card">
                  <span className="feature-icon">{v.icon}</span>
                  <h3 className="feature-title">{v.title}</h3>
                  <p className="feature-desc">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="section">
        <div className="section-inner">
          <div ref={timelineRef} className={`animate section-header centered ${timelineVisible ? "in-view" : ""}`}>
            <p className="section-eyebrow">Our Story</p>
            <h2 className="section-title">How We Got Here</h2>
          </div>
          <div className="timeline">
            {milestones.map((m, i) => (
              <AnimatedSection
                key={m.year}
                animClass={i % 2 === 0 ? "animate-left" : "animate-right"}
                delay={`delay-${(i % 3) + 1}`}
              >
                <div className={`timeline-item ${i % 2 === 0 ? "left" : "right"}`}>
                  <div className="timeline-badge">{m.year}</div>
                  <div className="timeline-content"><p>{m.event}</p></div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="section section-alt">
        <div className="section-inner">
          <div ref={teamRef} className={`animate section-header centered ${teamVisible ? "in-view" : ""}`}>
            <p className="section-eyebrow">The Team</p>
            <h2 className="section-title">Meet the People Behind ApartaFind</h2>
          </div>
          <div className="team-grid">
            {team.map((member, i) => (
              <AnimatedSection key={member.name} delay={`delay-${i + 1}`} animClass="animate-scale">
                <div className="team-card">
                  <div className="team-avatar">{member.avatar}</div>
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <p className="team-bio">{member.bio}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <AnimatedSection>
        <section className="cta-banner">
          <div className="cta-inner">
            <h2>Have Questions? We're Here.</h2>
            <p>Reach out to our team and we'll help you find exactly what you're looking for.</p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-white">Contact Us</Link>
              <Link to="/apartments" className="btn btn-outline-white">Browse Listings</Link>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </>
  );
}
