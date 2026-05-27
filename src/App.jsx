import { useMemo, useState } from "react";

const pages = ["Home", "Programs", "Contact"];

const programs = [
  {
    name: "Foundation Reset",
    price: "$149",
    cadence: "4 weeks",
    description: "Rebuild consistency with guided strength sessions, nutrition anchors, and habit tracking.",
    features: ["3 custom workouts weekly", "Movement screen", "Weekly progress review", "Nutrition targets"],
    accent: "lime",
  },
  {
    name: "Performance Build",
    price: "$299",
    cadence: "8 weeks",
    description: "A focused coaching block for visible strength, conditioning, and body composition progress.",
    features: ["5-session training split", "Biweekly video calls", "Macro coaching", "Recovery dashboard"],
    accent: "orange",
    popular: true,
  },
  {
    name: "Elite Transformation",
    price: "$549",
    cadence: "12 weeks",
    description: "High-touch coaching for clients who want premium accountability and a complete training plan.",
    features: ["Fully bespoke program", "Weekly strategy calls", "Form checks", "Priority coach support"],
    accent: "blue",
  },
];

const metrics = [
  ["12+", "years coaching"],
  ["3.8k", "client sessions"],
  ["91%", "completion rate"],
];

function App() {
  const [activePage, setActivePage] = useState("Home");

  const pageTitle = useMemo(() => {
    if (activePage === "Programs") return "Programs";
    if (activePage === "Contact") return "Book a Call";
    return "Home";
  }, [activePage]);

  return (
    <div className="app-shell">
      <header className="site-header">
        <button className="brand" onClick={() => setActivePage("Home")} aria-label="Go to home">
          <span className="brand-mark">F</span>
          <span>
            ForgeFit
            <small>Coaching</small>
          </span>
        </button>

        <nav className="nav-links" aria-label="Primary navigation">
          {pages.map((page) => (
            <button
              key={page}
              className={activePage === page ? "active" : ""}
              onClick={() => setActivePage(page)}
            >
              {page === "Contact" ? "Contact / Book Call" : page}
            </button>
          ))}
        </nav>
      </header>

      <main>
        <p className="page-kicker">{pageTitle}</p>
        {activePage === "Home" && <Home onNavigate={setActivePage} />}
        {activePage === "Programs" && <Programs onNavigate={setActivePage} />}
        {activePage === "Contact" && <Contact />}
      </main>
    </div>
  );
}

function Home({ onNavigate }) {
  return (
    <>
      <section className="hero-section">
        <div className="hero-copy">
          <span className="eyebrow">Premium online strength coaching</span>
          <h1>Train with structure, intensity, and a coach who keeps you moving.</h1>
          <p>
            ForgeFit helps busy professionals build lean strength with tailored programming,
            practical nutrition, and weekly accountability that fits real life.
          </p>
          <div className="hero-actions">
            <button className="primary-action" onClick={() => onNavigate("Contact")}>
              Book Strategy Call
            </button>
            <button className="secondary-action" onClick={() => onNavigate("Programs")}>
              View Programs
            </button>
          </div>
        </div>

        <div className="coach-card" aria-label="Coach profile card">
          <div className="coach-photo">
            <div className="photo-ring" />
            <span>Coach Alex</span>
          </div>
          <div className="coach-stats">
            {metrics.map(([value, label]) => (
              <div key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="feature-grid">
        <Feature title="Built for your schedule" text="Efficient sessions and flexible training weeks that match your equipment, calendar, and recovery." />
        <Feature title="Measured progress" text="Track strength, body composition, energy, and consistency with clear coaching feedback." />
        <Feature title="No guesswork" text="Every block includes exercise intent, progression targets, warmups, and nutrition priorities." />
      </section>
    </>
  );
}

function Programs({ onNavigate }) {
  return (
    <section className="programs-section">
      <div className="section-heading">
        <span className="eyebrow">Coaching options</span>
        <h1>Choose the level of support that matches your next training phase.</h1>
        <p>Each program includes app-based delivery, coaching notes, and clear weekly execution standards.</p>
      </div>

      <div className="pricing-grid">
        {programs.map((program) => (
          <article className={`pricing-card ${program.accent}`} key={program.name}>
            {program.popular && <span className="popular-badge">Most popular</span>}
            <h2>{program.name}</h2>
            <p>{program.description}</p>
            <div className="price-row">
              <strong>{program.price}</strong>
              <span>/ {program.cadence}</span>
            </div>
            <ul>
              {program.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <button onClick={() => onNavigate("Contact")}>Start with {program.name}</button>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-copy">
        <span className="eyebrow">Book your consultation</span>
        <h1>Tell us where you are now. We’ll map the next clean step.</h1>
        <p>
          Use the form to request a free 20-minute strategy call. You will get a practical
          recommendation before any coaching package is suggested.
        </p>
        <div className="contact-panel">
          <strong>What to expect</strong>
          <span>Goal review</span>
          <span>Training history check</span>
          <span>Program fit recommendation</span>
        </div>
      </div>

      <form className="booking-form">
        <label>
          Full name
          <input type="text" name="name" placeholder="Jordan Smith" />
        </label>
        <label>
          Email
          <input type="email" name="email" placeholder="jordan@example.com" />
        </label>
        <label>
          Primary goal
          <select name="goal" defaultValue="">
            <option value="" disabled>
              Select a goal
            </option>
            <option>Build muscle</option>
            <option>Lose body fat</option>
            <option>Improve strength</option>
            <option>Return to training</option>
          </select>
        </label>
        <label>
          Notes
          <textarea name="notes" rows="5" placeholder="Tell me about your training, schedule, and target date." />
        </label>
        <button type="submit">Request Call</button>
      </form>
    </section>
  );
}

function Feature({ title, text }) {
  return (
    <article className="feature-card">
      <span />
      <h2>{title}</h2>
      <p>{text}</p>
    </article>
  );
}

export default App;
