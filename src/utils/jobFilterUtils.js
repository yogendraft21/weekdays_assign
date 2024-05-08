export const filterJobs = (jobs, filters) => {

  if (
    !filters.roles &&
    !filters.experience &&
    !filters.location &&
    !filters.numberOfEmployees &&
    !filters.minimumBasePaySalary
  ) {
    return jobs;
  }

    return jobs.filter((job) => {
        console.log(job);
        console.log(filters);
    // Role filter
    if (filters.roles?.length > 0 && !filters.roles?.includes(job.jobRole.toLowerCase())) {
      return false;
    }

    // // Experience filter
    if (filters.experience?.length > 0 && !filters.experience?.includes(job.minExp)) {
      return false;
    }

    // Location filter
    if (
      filters.remote?.length > 0 &&
      !filters.remote?.includes(job.location.toLowerCase())
    ) {
      return false;
    }

    // // Number of employees filter
    // if (filters.numberOfEmployees) {
    //   const employeesMatch = filters.numberOfEmployees.some((range) => {
    //     if (!job.numberOfEmployees || !range) return false;
    //     const [min, max] = range.split("-").map(Number);
    //     return job.numberOfEmployees >= min && job.numberOfEmployees <= max;
    //   });
    //   if (!employeesMatch) {
    //     return false;
    //   }
    // }

    // if (filters.minimumBasePaySalary) {
    //   const salaryMatch = filters.minimumBasePaySalary.some((salary) => {
    //     if (!job.minJdSalary || !salary) return false;
    //     const minSalary = Number(salary.replace("l", "").replace("L", ""));
    //     return job.minJdSalary >= minSalary;
    //   });
    //   if (!salaryMatch) {
    //     return false;
    //   }
    // }

    return true;
  });
};
