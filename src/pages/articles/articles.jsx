import React, { useEffect, useState } from "react";
import Card from "../../components/home/Card"
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "./articlesSlice";

const Articles = () => {
  // console.log("hsgfh article ki id ",id)
  const [data, setData] = useState([]);
  const articles = useSelector((state) => state.articles.articles);
  const loading = useSelector((state) => state.articles.loading); // Accessing loading state
  const error = useSelector((state) => state.articles.error);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);
  useEffect(() => {
    if (articles.length) {
      setData(articles);
    }
  }, [articles]);
  if (loading) {
    return <div>Loading...</div>; // Show loading UI while fetching data
  }

  if (error) {
    return <div>Error: {error}</div>; // Show error message if the fetch failed
  }
  if (!data.length) {
    return <div>No Data Available</div>; // Show message when there's no data
  }
  console.log("articles", articles); // this will log the data after fetching from the API
  console.log("articles ks dta", data);

  return (
    <div>
      <div className=" flex justify-center text-4xl py-3">
        Find your First job
      </div>
      <div className="grid grid-cols-3">
        {data.map(({ id, title }) => (
          <Card
            key={id} 
            id={id} // unique key for each item
            title={title} // destructured title
            // description={jobDescription} // destructured description
          />
        ))}
      </div>
    </div>
  );
};

export default Articles;
