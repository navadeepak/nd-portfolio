import "./App.css";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Skill from "./components/Skill";
import Experiences from "./components/Experiences";
import Contact from "./components/Contact";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="relative">
      <Navbar/>
      <div className="w-full h-[90vh] text-white">
        <Router>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/project" element={<Project />} />
            <Route path="/skill" element={<Skill />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
