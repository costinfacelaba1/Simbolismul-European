import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import SlideShow from "./pages/SlideShow";

const App = () => {
  return (
    <Router>
      <div>
        {/* Navigation links */}

        {/* Routes */}
        <Routes>
          {/* Define the home route with the `element` prop */}
          <Route path="/" element={<Home />} />
          {/* Define the slideshow route with the `element` prop */}
          <Route path="/slideshow" element={<SlideShow />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
