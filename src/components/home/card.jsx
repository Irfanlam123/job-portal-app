import React from "react";
import CardImage from "../../assets/cardImg.jpg";

export const Card = ({ id, title, description, sectorName, numberOfJobs }) => {
  return (
    <>
      <div className="px-9 py-2 text-4xl">
        <div className="px-5 py-4  flex space-x-4 ">
          <div className="max-w-sm rounded overflow-hidden shadow-lg ">
            <img className="w-full" src={CardImage} alt="image" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                {title ? title : sectorName}
              </div>
              <p className="text-gray-700 text-base">
                {description ? description : numberOfJobs}
              </p>
            </div>
            <div className="bg-red-500 py-3 px-5 font-thin rounded-lg cursor-pointer">
              Read More {`--->`}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
