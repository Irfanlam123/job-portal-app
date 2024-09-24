import React from "react";
import CardImage from "../../assets/cardImg.jpg";

export const Card = ({ title, description }) => {
  return (
    <div className="px-9 py-2 text-4xl">
      <div className=" flex justify-center"> Find the job first</div>
      <div className="px-5 py-4  flex space-x-4 ">
        {[1, 2, 3, 4].map((items, i) => {
          return (
            <div className="max-w-sm rounded overflow-hidden shadow-lg" key={i}>
              <img className="w-full" src={CardImage} alt="image" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">{description}</p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #photography
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #travel
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #winter
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
