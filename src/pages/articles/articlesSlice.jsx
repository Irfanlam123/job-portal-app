import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    jobTitle: "Software Engineer",
    jobDescription:
      "Design, develop, and maintain software applications using modern programming languages.",
  },
  {
    id: 2,
    jobTitle: "Data Analyst",
    jobDescription:
      "Analyze large datasets to derive insights and provide business intelligence solutions.",
  },
  {
    id: 3,
    jobTitle: "Project Manager",
    jobDescription:
      "Plan, execute, and manage projects ensuring that they meet deadlines and budget constraints.",
  },
  {
    id: 4,
    jobTitle: "UX/UI Designer",
    jobDescription:
      "Create user-friendly and visually appealing interfaces for websites and applications.",
  },
  {
    id: 5,
    jobTitle: "DevOps Engineer",
    jobDescription:
      "Automate and streamline operations to improve deployment efficiency and infrastructure stability.",
  },
  {
    id: 6,
    jobTitle: "Marketing Specialist",
    jobDescription:
      "Develop and implement marketing strategies to promote products and services effectively.",
  },
  {
    id: 7,
    jobTitle: "HR Manager",
    jobDescription:
      "Oversee human resource functions, including recruitment, employee relations, and compliance.",
  },
  {
    id: 8,
    jobTitle: "Full Stack Developer",
    jobDescription:
      "Work on both the frontend and backend development of web applications.",
  },
  {
    id: 9,
    jobTitle: "Content Writer",
    jobDescription:
      "Create engaging content for websites, blogs, and social media platforms.",
  },
  {
    id: 10,
    jobTitle: "IT Support Specialist",
    jobDescription:
      "Provide technical assistance to users, troubleshoot hardware and software issues.",
  },
];

const articleSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {},
});

export default articleSlice.reducer;
