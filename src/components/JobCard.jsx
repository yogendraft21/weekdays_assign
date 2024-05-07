import React from "react";

const JobCard = (props) => {
  const job = props.job;

  return (
    <div className="job-card">
      <div className="job-card-flex">
        <span className="posted-time">Posted 10 days ago</span>

        <div className="company-details">
          <img src={job.logoUrl} className="company-details-logo" alt="logo" />
          <div className="company-details-text">
            <a href={job.jdLink} target="_blank" rel="noopener noreferrer">
              <div className="company-name">{job.companyName}</div>
            </a>
            <div className="job-role">{job.jobRole}</div>
            <div className="location">{job.location}</div>
          </div>
        </div>
        <div className="salary">
          Estimated Salary:{" "}
          {job.minJdSalary !== null
            ? job.salaryCurrencyCode + " " + job.minJdSalary + " - "
            : ""}
          ₹ {job.maxJdSalary} LPA ✅
        </div>
        <div className="about-company-label">About Company</div>
        <div className="about-company">{job.jobDetailsFromCompany}</div>
        <div className="view-job">View job</div>

        <div className="experience-flex">
          <div className="experience-label">
            {job.minExp !== null ? "Minimum Experience" : ""}
          </div>
          <div className="experience">
            {job.minExp !== null ? job.minExp + " years" : ""}
          </div>
        </div>
        <a href={job.jdLink} target="_blank" rel="noreferrer">
          <button className="easy-apply">Easy Apply</button>
        </a>
        <button className="referral">Unloak Referral Asks</button>
      </div>
    </div>
  );
};

export default JobCard;
