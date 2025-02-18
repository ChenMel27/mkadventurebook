import "./App.css";

function App() {
  return (
    <div className="video-container">
      {/* Background Video */}
      <video autoPlay loop muted playsInline className="background-video">
        <source src={`${process.env.PUBLIC_URL}/kennybg.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Navigation Links in Top Right */}
      <nav className="nav-links">
        <a href="#map">Map</a>
        <a href="#todo">To-Do List</a>
        <a href="#about">About</a>
      </nav>

      {/* Title Page */}
      <div className="overlay">
        <h1 className="title">Our Adventure Book</h1>
      </div>
    </div>
  );
}

export default App;
