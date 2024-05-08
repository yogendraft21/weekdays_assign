import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import JobCard from "./JobCard";
import { fetchJobs, resetJobs } from "../actions/jobActions";
import { filterJobs } from "../utils/jobFilterUtils";

const JobList = () => {
  const dispatch = useDispatch();
  const { jobs, loading, error } = useSelector((state) => state.jobs);
  const filtersValue = useSelector((state) => state.jobs.filters);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [offset, setOffset] = useState(0);
  const limit = 10;
    const [isMounted, setIsMounted] = useState(false);
    
  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  useEffect(() => {
    if (isMounted) {
      dispatch(fetchJobs(offset, limit));
    }
  }, [dispatch, offset, limit, isMounted]);

  useEffect(() => {
    if (isMounted) {
      dispatch(resetJobs());
    }
  }, [dispatch, isMounted]);

  useEffect(() => {
    const newFilteredJobs = filterJobs(jobs, filtersValue);
    setFilteredJobs(newFilteredJobs);
  }, [jobs, filtersValue]);

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
  }, [handleScroll]);

  return (
    <div className="job-list-container">
      <div className="job-list">
        {loading && jobs.length === 0 ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error}</div>
        ) : (
          <>
            {filteredJobs.map((job) => (
              <JobCard key={job.jdUid} job={job} />
            ))}
            {loading && (
              <div className="loading-popup">Loading More Jobs...</div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default JobList;
