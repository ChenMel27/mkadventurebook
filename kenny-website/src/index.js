import React from "react";
import ReactDOM from "react-dom/client"; // For React 18+
import App from "./App";

const container = document.getElementById("root");
if (!container) {
  throw new Error("Root container not found. Ensure there's a div with id='root' in your HTML.");
}
const root = ReactDOM.createRoot(container);
root.render(<App />);
