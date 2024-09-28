import React from "react";
import Navbar from "./components/navigation/Navbar";
import Router from "./Router";

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Signup/> */}
      <Router />
      {/* <Footer /> */}
    </div>
  );
};

export default App;
