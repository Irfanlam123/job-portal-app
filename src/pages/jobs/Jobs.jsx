import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchJobs } from "../../api/jobApi";
import { Card } from "../../components/home/Card";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const getJobs = async () => {
      const jobData = await fetchJobs();
      setJobs(jobData);
    };

    getJobs();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {jobs.map((job) => (
        <Card
          key={job.id}
          title={job.title}
          description={job.description}
          sectorName={job.sectorName}
          numberOfJobs={job.numberOfJobs}
          id={job.id}
        />
      ))}
    </div>
  );
};
export default Jobs

