import React, { useState } from "react";

const CardComponent = () => {
  const [showForm, setShowForm] = useState(false);

  const handleApplyClick = () => {
    setShowForm(true);
  };

  return (
    <div className="flex justify-center py-6">
      <div className="bg-white w-full max-w-screen-lg rounded-lg shadow-lg p-6 mx-4">
        <h2 className="text-2xl font-semibold mb-4">Job Title</h2>
        <p className="text-gray-700 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at
          erat eu elit ultrices viverra.
        </p>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={handleApplyClick}
        >
          Easy Apply
        </button>

        {/* Form Section */}
        {showForm && (
          <div className="mt-6 border-t border-gray-300 pt-6">
            <h3 className="text-xl font-semibold mb-4">Application Form</h3>
            <form>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="qualification"
                >
                  Qualification
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="qualification"
                  type="text"
                  placeholder="Enter your qualification"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="resume"
                >
                  Upload Resume
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="resume"
                  type="file"
                  accept=".pdf,.doc,.docx"
                />
              </div>

              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Submit
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardComponent;
