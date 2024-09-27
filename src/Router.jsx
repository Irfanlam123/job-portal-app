// src/Router.jsx
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Dashboard from "./pages/dashboard/Dashboard";
import Jobs from "./pages/jobs/Jobs";
import LoginForm from "./components/forms/LoginForm";
import ResisterForm from "./components/forms/ResisterForm";
import Lover from "./components/home/Lover"; // Correct import
import JobDetail from "./pages/jobs/JobDetail"; // Import JobDetail component

function Routers() {
  return (
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/Jobs" element={<Jobs />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/" element={<Lover />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/ResisterForm" element={<ResisterForm />} />
      <Route path="/job/:id" element={<JobDetail />} />{" "}
    </Routes>
  );
}

export default Routers;
