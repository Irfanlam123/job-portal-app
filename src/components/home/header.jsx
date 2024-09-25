import React from "react";

export const Header = () => {
  return (
    <div className="bg-slate-200 py-10">
      <div className="container mx-auto py-8 px-4">
        <div className="text-4xl text-center font-bold mb-5 text-gray-800">
          FIND THE JOB THAT FITS YOUR LIFE
          <p className="text-lg text-gray-600 mt-2">
            We offer thousands of job vacancies right now
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-4">
          <input
            type="text"
            className="border border-slate-300 rounded-md px-6 py-4 text-sm w-full focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300"
            placeholder="Job title, keywords, or company name"
          />
          <input
            type="text"
            className="border border-slate-300 rounded-md px-6 py-4 text-sm w-full mt-4 md:mt-0 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300"
            placeholder="Location"
          />
          <button className="bg-red-500 text-white px-6 py-4 rounded-md mt-4 md:mt-0 hover:bg-red-600 transition duration-300">
            Search
          </button>
        </div>
      </div>
      <div className="text-center mt-4 px-4">
        <p className="text-gray-700">
          Browse job offers by Category or Location
        </p>
      </div>
    </div>
  );
};
