import React from "react";
import { Header } from "../components/home/header";
import Navbar from "../components/navigation/Navbar";
import { Card } from "../components/home/card";
import { Lover } from "../components/home/lover";
import Articles from "./articles";

const Home = () => {
  return (
    <div className="mt-16">
      <Header />
      <Card
        title="Home"
        description="Home there was a landwaa which chding very buraidknfjwbd wdfewfhwebwiw wfjwbfiuwfwiuw ffiwifbwuifw wijifbwif"
      />
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
