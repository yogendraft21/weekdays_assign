export const filterJobs = (jobs, filters, search) => {
  if (
    !filters.roles &&
    !filters.experience &&
    !filters.location &&
    !filters.numberOfEmployees &&
    !filters.minimumBasePaySalary &&
    !search
  ) {
    return jobs;
  }

  return jobs.filter((job) => {
    // Role filter
    if (
      filters.roles?.length > 0 &&
      !filters.roles?.includes(job.jobRole.toLowerCase())
    ) {
      return false;
    }

    // Experience filter
    if (
      filters.experience?.length > 0 &&
      !filters.experience?.includes(job.minExp)
    ) {
      return false;
    }

    // Location filter
    if (
      filters.remote?.length > 0 &&
      !filters.remote?.includes(job.location.toLowerCase())
    ) {
      return false;
    }

    // Minimum base salary filter
    if (filters.minimumBasePaySalary?.length > 0) {
      const salaryMatch = filters.minimumBasePaySalary.some((salary) => {
        const minSalary = Number(salary.replace("l", "").replace("L", ""));
        console.log("both salaries", minSalary, " ", job.minJdSalary);
        if (job.minJdSalary != null) {
          return job.minJdSalary >= minSalary;
        } else {
          return job.maxJdSalary >= minSalary;
        }
      });
      if (!salaryMatch) {
        return false;
      }
    }

    // Search filter
    if (
      search &&
      !job.companyName.toLowerCase().includes(search.toLowerCase())
    ) {
      return false;
    }

    return true;
  });
};
