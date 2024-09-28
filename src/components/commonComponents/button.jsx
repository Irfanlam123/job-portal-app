import React from 'react'
import { Link } from 'react-router-dom';

export const Button = () => {
  return (
    <div className="flex justify-center">
      <Link to={`jobs`}>
        <div className="bg-red-500 py-2 px-4 font-semibold text-white rounded-lg cursor-pointer transition duration-200 hover:bg-red-600 transform hover:scale-105">
          <p className="text-lg text-center">Read More {`--->`}</p>
        </div>
      </Link>
    </div>
  );
}
