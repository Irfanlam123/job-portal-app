import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Jobs from "./pages/Jobs";
import LoginForm from "./components/forms/LoginForm";
import ResisterForm from "./components/forms/ResisterForm";

function Routers() {
  return (
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/Jobs" element={<Jobs />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/LoginForm" element={<LoginForm />} />
      <Route path="/ResisterForm" element={<ResisterForm />} />


    </Routes>
  );
}

export default Routers;
