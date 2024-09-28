import React from "react";
import { Link, useParams } from "react-router-dom";
import CardImage from "../../assets/cardImg.jpg";

const Card = ({ id, title, description, sectorName, numberOfJobs }) => {
  console.log("card ki id ", id);
  // const {id} = useParams()
  // console.log("router id:",id)
  return (
    <div className="flex justify-center my-4">
      <div className="max-w-sm rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105">
        <img className="w-full h-48 object-cover" src={CardImage} alt="image" />
        <div className="p-6 bg-white">
          <h2 className="font-bold text-2xl mb-2 text-gray-800">
            {title ? title : sectorName}
          </h2>
          <p className="text-gray-600 text-base mb-4">
            {description ? description : numberOfJobs}
          </p>
          <div className="flex justify-center">
            <Link to={`/job/${id}`}>
              <div className="bg-red-500 py-2 px-4 font-semibold text-white rounded-lg cursor-pointer transition duration-200 hover:bg-red-600 transform hover:scale-105">
                <p className="text-lg text-center">Read More {`--->`}</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
