import React from 'react'
import Navbar from "./components/navigation/Navbar"
import Router from "./Router"
import Signup from "./task/task"
const App = () => {
  return (
    <div>
      <Navbar/>
        {/* <Signup/> */}
      <Router/>
    </div>
  )
}

export default App