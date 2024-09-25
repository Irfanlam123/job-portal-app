import React from "react";
import { Header } from "../../components/home/header";
import Navbar from "../../components/navigation/Navbar";
import { Card } from "../../components/home/card";
import { Lover } from "../../components/home/lover";
import Articles from "../articles/articles";
import { useSelector } from "react-redux";

const Home = () => {
  const home = useSelector((state) => state.home);

  return (
    <div className="mt-16">
      <Header />
      <div className="grid grid-cols-3">
        {home.map(({ id, sectorName, numberOfJobs }) => (
          <Card
            key={id} // unique key for each item
            sectorName={sectorName} // destructured title
            numberOfJobs={numberOfJobs} // destructured description
          />
        ))}
      </div>
      <Lover />
      <div className="bg-slate-200  py-8  ">
        <div className="flex justify-center text-5xl">Recent Listing</div>
        <br />
        <br />
        <br />
        <br />
        <div className="flex justify-center m-auto bg-red-500 w-52 rounded-md ">
          <button className="py-3 px-7 ">EXPLORE ALL JOBS</button>
        </div>
      </div>
      <Articles />
      <Lover />
    </div>
  );
};

export default Home;
