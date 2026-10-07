import './App.css'

const capabilities = [
  { value: '99.9%', label: 'Platform uptime' },
  { value: '24/7', label: 'Operational support' },
  { value: '3×', label: 'Faster delivery' },
]

function App() {
  return (
    <main className="app-shell">
      <nav className="topbar" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Enterprise frontend home">
          <span className="brand-mark">E</span>
          <span>Enterprise</span>
        </a>
        <div className="nav-links">
          <a href="#platform">Platform</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#overview">Overview</a>
        </div>
        <button className="nav-button" type="button">Open dashboard</button>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Enterprise application frontend</p>
          <h1>Build the next layer of your business.</h1>
          <p className="hero-description">
            A modern React foundation for scalable workflows, connected teams,
            and reliable business operations.
          </p>
          <div className="hero-actions">
            <button className="primary-button" type="button">Get started</button>
            <button className="secondary-button" type="button">Explore platform</button>
          </div>
        </div>

        <div className="dashboard-card" id="platform" aria-label="Platform overview">
          <div className="card-header">
            <div>
              <p>Platform health</p>
              <strong>All systems operational</strong>
            </div>
            <span className="status-dot">Live</span>
          </div>
          <div className="chart" aria-hidden="true">
            <div className="chart-grid" />
            <svg viewBox="0 0 520 180" preserveAspectRatio="none">
              <defs>
                <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#6d5dfc" stopOpacity="0.42" />
                  <stop offset="100%" stopColor="#6d5dfc" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path className="chart-area" d="M0,150 C65,138 80,112 140,122 S215,72 270,88 S345,34 520,28 L520,180 L0,180 Z" />
              <path className="chart-line" d="M0,150 C65,138 80,112 140,122 S215,72 270,88 S345,34 520,28" />
            </svg>
          </div>
          <div className="metric-row" id="capabilities">
            {capabilities.map((metric) => (
              <div className="metric" key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="overview" id="overview">
        <p>Built for modern operations</p>
        <h2>One clear interface for every critical workflow.</h2>
        <div className="feature-grid">
          <article>
            <span>01</span>
            <h3>Connected systems</h3>
            <p>Bring data and workflows together in one reliable experience.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Secure by design</h3>
            <p>Implement consistent controls across every application surface.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Ready to scale</h3>
            <p>Grow from a focused release into a complete enterprise platform.</p>
          </article>
        </div>
      </section>
    </main>
  )
}

export default App
