import React from "react";

export const Header = () => {
  return (
    <div className="bg-slate-200 py-5">
      <div className=" w-full  py-8">
        <div className="text-4xl text-center font-bold py-5">
          FIND THE JOB THAT FITS YOUR LIFE
          <p>We offer thousands of jobs vacancies right now</p>
        </div>
        <div className="flex  px-10 space-x-4  ">
          <input
            type="text"
            className="border border-slate-300 rounded-md px-6 py-5 text-sm w-full focus:outline-none focus:ring-2 focus:ring-slate-300"
            placeholder="Type your job title, keywords, or company name"
          />
          <br />
          <br />
          <input
            type="text"
            className="border border-slate-300 rounded-md px-6 py-5 text-sm w-full focus:outline-none focus:ring-2 focus:ring-slate-300"
            placeholder="Type your job title, keywords, or company name"
          />
          <button className="bg-red-500 text-white px-12 py-3 rounded-md">
            Search
          </button>
        </div>
      </div>
      <div className="px-10 py-2">
        <p>Browse job offers by Category or Location</p>
      </div>
    </div>
  );
};
