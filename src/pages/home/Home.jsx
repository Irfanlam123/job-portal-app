import React from "react";
import { Header } from "../../components/home/header";
import Navbar from "../../components/navigation/Navbar";
import { Card } from "../../components/home/Card";
import Lover from "../../components/home/Lover"; // Adjust the path if necessary
import Articles from "../articles/articles";
import { useSelector } from "react-redux";

const Home = () => {
  const home = useSelector((state) => state.home);
  const homeId = useSelector((state) => state.home.id);
  console.log("homeid", homeId);

  return (
    <div className="mt-16">
      <Header />
      <div className="grid grid-cols-3">
        {/* {home.map(({ id, sectorName, numberOfJobs }) => (
          <Card
            key={id} // unique key for each item
            id={id}
            sectorName={sectorName} // destructured title
            numberOfJobs={numberOfJobs} // destructured description
          />
        ))} */}
      </div>
      <Lover />
      <div className="bg-slate-200 py-12">
        <div className="flex justify-center text-5xl font-bold text-gray-800 mb-8">
          Recent Listings
        </div>

        <div className="flex justify-center mb-8">
          <div className="bg-red-500 rounded-md shadow-lg transition-transform transform hover:scale-105">
            <button className="py-3 px-7 text-white font-semibold rounded-md transition-colors duration-200 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300">
              EXPLORE ALL JOBS
            </button>
          </div>
        </div>
      </div>

      <Articles />
      <Lover />
    </div>
  );
};

export default Home;
