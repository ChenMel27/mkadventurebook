import "./App.css";

function App() {
  return (
    <div className="video-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <h2 className="logo">K&M</h2>
        <div className="nav-container">
          <ul className="nav-links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#gameplay">Gameplay</a>
            </li>
            <li>
              <a href="#buy">Buy Now</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Background Video */}
      <video autoPlay loop muted playsInline className="background-video">
        <source
          src={`${process.env.PUBLIC_URL}/kennybg.mp4`}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Title Page */}
      <div className="overlay">
        <h1 className="title">Adventure Book</h1>
      </div>
    </div>
  );
}

export default App;
