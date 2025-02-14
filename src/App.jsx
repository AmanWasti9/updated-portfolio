import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";
import AllProjects from "./components/AllProjects";
import Home from "./Pages/Home";
import Contact from "./components/Contact";
import { useEffect } from "react";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when location changes
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <ThemeProvider>
        <ScrollToTop />
        <div
          className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white"
          style={{
            overflowX: "hidden",
          }}
        >
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<AllProjects />} />
          </Routes>
          <Contact />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
