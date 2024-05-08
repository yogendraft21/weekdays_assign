import React, { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { searchJobs, updateFilters } from "../actions/jobActions";

const filterOptions = {
  roles: [
    "Software Engineer",
    "Backend",
    "Frontend",
    "Full Stack",
    "IOS",
    "React Native",
    "DevOps",
  ],
  numberOfEmployees: ["1-10", "11-20", "21-50", "51-100", "101-500", "500+"],
  experience: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  remote: [
  "Bangalore",
  "Hyderabad",
  "Pune",
  "Chennai",
  "Mumbai",
  "Noida",
  "Gurugram",
  "Delhi NCR",
  "Kolkata",
  "Ahmedabad",
  "Coimbatore",
  "Kochi",
  "Jaipur",
  "Chandigarh",
  "Indore"
],
  minimumBasePaySalary: ["0L", "10L", "20L", "30L", "40L", "50L", "60L", "70L"],
};

const placeholderNames = [
  "Roles",
  "Number Of Employees",
  "Experience",
  "Location",
  "Minimum Base Pay Salary",
];

const animatedComponents = makeAnimated();

const customStyles = {
  control: (provided) => ({
    ...provided,
    fontSize: "14px",
  }),
  menu: (provided) => ({
    ...provided,
    width: 250,
  }),
  option: (provided) => ({
    ...provided,
    fontSize: "14px",
  }),
};

function FilterComponent() {
    const dispatch = useDispatch();
    const filterSelected = useSelector((state) => state.jobs.filters);
    const handleFilterChange = (selectedOptions, filterKey) => {
     const selectedValues = selectedOptions.map((option) => {
       const value = option.value;
       return typeof value === "string" ? value.toLowerCase() : value;
     });
      dispatch(
        updateFilters({ ...filterSelected, [filterKey]: selectedValues })
      );
    };

    const handleSearchChange = (event) => {
      dispatch(searchJobs(event.target.value));
    };

  return (
    <div className="filter-container">
      {Object.keys(filterOptions).map((filterKey, index) => (
        <div key={filterKey} className="filter">
          <div className="filter-dropdown">
            <Select
              id={filterKey}
              options={filterOptions[filterKey].map((option) => ({
                value: option,
                label: option,
              }))}
              placeholder={`${placeholderNames[index]}`}
              isMulti={true}
              components={animatedComponents}
              styles={customStyles}
              onChange={(selectedOptions) =>
                handleFilterChange(selectedOptions, filterKey)
              }
            />
          </div>
        </div>
      ))}
      <div className="search">
        <input
          type="text"
          placeholder="Search company name..."
          className="company-search"
          onChange={handleSearchChange}
        />
      </div>
    </div>
  );
}

export default FilterComponent;
