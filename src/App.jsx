import React from "react";
import Navbar from "./components/navigation/Navbar";
import Router from "./Router";
import Signup from "./task/task";
import { Footer } from "./pages/footer/footer";
const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Signup/> */}
      <Router />
      <Footer />
    </div>
  );
};

export default App;
