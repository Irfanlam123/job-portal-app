import React from "react";
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
const Navbar = () => {
  const navBar = [
    { id: 1, name: "Home", link: "/Home" },
    { id: 2, name: "Jobs", link: "/Jobs" },
    { id: 3, name: <MdDashboard />, link: "/Dashboard" },
    
  ];

  return (
    <div className="bg-white text-gray-950 shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-5 flex justify-between items-center">
        <h2 className="text-2xl font-semibold">
          <Link
            to="/Home"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            FindJob
          </Link>
        </h2>
        <nav>
          <ul className="flex space-x-6 items-center">
            {navBar.map((e) => (
              <li key={e.id} className="group">
                <Link
                  to={e.link}
                  className="text-lg font-medium hover:text-blue-300 transition-colors duration-300 flex items-center"
                >
                  {e.name}
                </Link>
                <div className="h-1 w-0 bg-blue-300 transition-all duration-300 group-hover:w-full"></div>
              </li>
            ))}
            <li>
              <Link
                to= "/LoginForm"
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300"
              >
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
