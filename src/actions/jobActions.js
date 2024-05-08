export const FETCH_JOBS_REQUEST = "FETCH_JOBS_REQUEST";
export const FETCH_JOBS_SUCCESS = "FETCH_JOBS_SUCCESS";
export const FETCH_JOBS_FAILURE = "FETCH_JOBS_FAILURE";
export const UPDATE_FILTERS = "UPDATE_FILTERS";
export const RESET_JOBS = "RESET_JOBS";

export const resetJobs = () => ({
  type: RESET_JOBS,
});

export const updateFilters = (filters) => ({
  type: UPDATE_FILTERS,
  payload: filters,
});

export const fetchJobsRequest = () => ({
  type: FETCH_JOBS_REQUEST,
});

export const fetchJobsSuccess = (jobs) => ({
  type: FETCH_JOBS_SUCCESS,
  payload: jobs,
});

export const fetchJobsFailure = (error) => ({
  type: FETCH_JOBS_FAILURE,
  payload: error,
});

export const fetchJobs = (offset,limit) => {
  return async (dispatch) => {
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const body = JSON.stringify({
        limit: limit,
        offset: offset,
      });

      const response = await fetch(
        "https://api.weekday.technology/adhoc/getSampleJdJSON",
        {
          method: "POST",
          headers: myHeaders,
          body,
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch jobs");
      }

      const result = await response.json();
      dispatch({ type: "FETCH_JOBS_SUCCESS", payload: result });
    } catch (error) {
      dispatch({ type: "FETCH_JOBS_FAILURE", payload: error.message });
    }
  };
};

