import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";
import AllProjects from "./components/AllProjects";
import Home from "./Pages/Home";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <ThemeProvider>
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
