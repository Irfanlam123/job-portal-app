import React from "react";
import { Card } from "../../components/home/card";
import { useSelector } from "react-redux";

const Articles = () => {
  const articles = useSelector((state) => state.articles);

  return (
    <div>
      <div className=" flex justify-center text-4xl py-3">
        Find the job first
      </div>
      <div className="grid grid-cols-3">
        {articles.map(({ id, jobTitle, jobDescription }) => (
          <Card
            key={id} // unique key for each item
            title={jobTitle} // destructured title
            description={jobDescription} // destructured description
          />
        ))}
      </div>
    </div>
  );
};

export default Articles;
