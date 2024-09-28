// src/Router.jsx
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";

import LoginForm from "./pages/forms/LoginForm";
import ResisterForm from "./pages/forms/ResisterForm";
import Jobs from "./pages/jobs/Jobs";

function Routers() {
  return (
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/ResisterForm" element={<ResisterForm />} />
      <Route path="/jobs" element={<Jobs />} />{" "}
    </Routes>
  );
}

export default Routers;
