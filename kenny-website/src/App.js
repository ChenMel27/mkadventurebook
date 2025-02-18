// App.js
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BibleVerseOfTheDay from "./BibleVerseOfTheDay";

// Placeholder About component
const About = () => (
  <div
    id="about"
    style={{
      padding: "20px",
      background: "#fff",
      minHeight: "100vh",
      fontFamily: "Playfair Display, serif",
    }}
  >
    <h2 style={{ textAlign: "center" }}>About</h2>
    <p style={{ textAlign: "center" }}>
      This is the About page. Content coming soon.
    </p>
  </div>
);

// Placeholder Bucket List component
const BucketList = () => (
  <div
    id="bucket-list"
    style={{
      padding: "20px",
      background: "#fff",
      minHeight: "100vh",
      fontFamily: "Playfair Display, serif",
    }}
  >
    <h2 style={{ textAlign: "center" }}>Bucket List</h2>
    <p style={{ textAlign: "center" }}>
      This is the Bucket List page. Content coming soon.
    </p>
  </div>
);

// Landing page component with video background and overlay
function LandingPage() {
  return (
    <>
      <video autoPlay loop muted playsInline className="background-video">
        <source
          src={`${process.env.PUBLIC_URL}/kennybg.mp4`}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="overlay">
        <h1 className="title">Adventure Book</h1>
      </div>
    </>
  );
}

// Placeholder Travel Map component
const TravelMap = () => (
  <div
    id="travel-map"
    style={{
      padding: "20px",
      background: "#fff",
      minHeight: "100vh",
      fontFamily: "Playfair Display, serif",
    }}
  >
    <h2 style={{ textAlign: "center" }}>Travel Map</h2>
    <p style={{ textAlign: "center" }}>
      This is the Travel Map page. Content coming soon.
    </p>
  </div>
);

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <>
        <div className="video-container">
          {/* Navigation Bar */}
          <nav className="navbar">
            <h2 className="logo">K&M</h2>
            <div className="nav-container">
              <ul className="nav-links">
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/bucket-list">Bucket List</Link>
                </li>
                <li>
                  <Link to="/travel-map">Travel Map</Link>
                </li>
              </ul>
            </div>
          </nav>

          {/* Define Routes */}
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/bucket-list" element={<BucketList />} />
            <Route path="/travel-map" element={<TravelMap />} />
          </Routes>
        </div>
        {/* Bible Verse Section */}
        <section className="bible-section">
          <BibleVerseOfTheDay />
        </section>
      </>
    </Router>
  );
}

export default App;
