// src/components/home/Lover.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import image from "../../../src/assets/ImageForLower.png";

const Lover = () => {
  const [profileData, setProfileData] = useState({
    title: "Loading...",
    description: "Fetching profile data...",
    author: "Loading...",
    date: "Fetching...",
  });

  useEffect(() => {
    const fetchData = async () => {
      setTimeout(() => {
        const fetchedData = {
          title: "Get Matched with Your Dream Job",
          description:
            "Create a free account, complete your profile, and get matched with your dream job instantly! Access thousands of job listings in your field.",
          author: "Jane Doe",
          date: "Sep 25, 2024",
        };
        setProfileData(fetchedData);
      }, 2000);
    };

    fetchData();
  }, []);

  return (
    <div className="py-8 px-12 lg:px-32">
      <div className="max-w-6xl w-full mx-auto bg-white shadow-lg rounded-lg overflow-hidden lg:flex transition-transform transform hover:scale-105">
        <div className="lg:w-1/2 relative">
          <img
            src={image}
            className="w-full h-full object-cover rounded-lg lg:rounded-l-lg"
            alt="Cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black opacity-30 rounded-lg"></div>
        </div>
        <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-between">
          <div>
            <div className="flex items-center text-gray-600 mb-4">
              <svg
                className="fill-current text-blue-500 w-5 h-5 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
              </svg>
              <span className="font-semibold text-sm">
                Advance your career with job process
              </span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {profileData.title}
            </h2>
            <p className="text-gray-700 leading-relaxed text-base">
              {profileData.description}
            </p>
          </div>
          <div className="mt-8">
            <Link to="/login">
              <button className="py-4 px-6 text-white font-semibold bg-gradient-to-r from-red-400 to-red-600 hover:from-red-500 hover:to-red-700 rounded-lg shadow-lg transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                Get Started
              </button>
            </Link>
          </div>
          <div className="flex items-center mt-8">
            <img
              className="w-12 h-12 rounded-full border-2 border-gray-200 mr-4"
              src={image}
              alt="Avatar"
            />
            <div className="text-sm">
              <p className="text-gray-900 font-semibold">
                {profileData.author}
              </p>
              <p className="text-gray-600">{profileData.date}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lover;
