const API_URL = "https://your-api-endpoint.com/jobs"; // Replace with your API endpoint

export const fetchJobs = async () => {
  const response = await fetch(API_URL);
  return await response.json();
};

export const fetchJobById = async (id) => {
  const response = await fetch(`${API_URL}/${id}`);
  return await response.json();
};

export const createJob = async (jobData) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jobData),
  });
  return await response.json();
};

export const updateJob = async (id, jobData) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jobData),
  });
  return await response.json();
};
