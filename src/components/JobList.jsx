import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import JobCard from "./JobCard";
import { fetchJobs } from "../actions/jobActions";


const JobList = () => {
  const dispatch = useDispatch();
    const { jobs, loading, error } = useSelector((state) => state.jobs);
    const [filters, setFilters] = useState([]);
  const [offset, setOffset] = useState(0);
  const limit = 10;

  useEffect(() => {
    dispatch(fetchJobs(offset, limit));
  }, [dispatch, offset, limit]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;
    setOffset((prevOffset) => prevOffset + limit);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="job-list-container">
      <div className="job-list">
        {loading && jobs.length === 0 ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error}</div>
        ) : jobs.length > 0 ? (
          <>
            {jobs.map((job) => (
              <JobCard key={job.jdUid} job={job} />
            ))}
            {loading && (
              <div className="loading-popup">Loading More Jobs...</div>
            )}
          </>
        ) : (
          <div>No jobs found.</div>
        )}
      </div>
    </div>
  );
};

export default JobList;
