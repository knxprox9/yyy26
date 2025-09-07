import React from "react";
import "./App.css";
import ProductCard from "./components/ProductCard";

/**
 * Product Card - Clean Standalone Component
 * 
 * Shows only the product card without any background or additional elements.
 * Perfect for embedding with preserved original design.
 */

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <div className="card-container">
          <ProductCard />
        </div>
      </div>
    </div>
  );
}

export default App;