import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import { Home } from "./pages/Home";
import { Blogs } from "./pages/Blogs";
import { Projects } from "./pages/Projects";
function App() {
  const getStyles = ({ isActive }) => ({
    color: isActive ? "Black" : "#928e8b",
    fontWeight: isActive ? "800" : "500",
  });
  return (
    <div className="">
      <nav className="text-lg space-x-4 font-medium bg-cyan-100 px-40 py-10">
        <NavLink
          style={getStyles}
          className="hover:shadow-md rounded px-1"
          to="/"
        >
          About
        </NavLink>
        <NavLink
          style={getStyles}
          className="hover:shadow-md rounded px-1 "
          to="/project"
        >
          Projects
        </NavLink>
        <NavLink
          style={getStyles}
          className="hover:shadow-md rounded px-1"
          to="/blog"
        >
          Blogs
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/project" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
