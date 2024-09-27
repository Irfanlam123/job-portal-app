import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchJobById } from "../../api/jobApi";

const JobDetail = () => {
  const { id } = useParams();
  const [jobDetail, setJobDetail] = useState(null);

  useEffect(() => {
    const getJobDetail = async () => {
      const job = await fetchJobById(id);
      setJobDetail(job);
    };

    getJobDetail();
  }, [id]);

  if (!jobDetail) return <div>Loading...</div>;

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-4">{jobDetail.title}</h2>
      <p className="text-gray-700 mb-4">{jobDetail.description}</p>
      <p className="text-gray-600">Number of Jobs: {jobDetail.numberOfJobs}</p>
    </div>
  );
};
export default JobDetail;
