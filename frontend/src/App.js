import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import CV from "./pages/CV";
import Portfolio from "./pages/Portfolio";
import CourtFinder from "./pages/CourtFinder";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen bg-gray-950 flex flex-col">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cv" element={<CV />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/courtfinder" element={<CourtFinder />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;