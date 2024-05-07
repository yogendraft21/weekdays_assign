import {
  FETCH_JOBS_FAILURE,
  FETCH_JOBS_REQUEST,
  FETCH_JOBS_SUCCESS,
} from "../actions/jobAction";

const initialState = {
  loading: false,
  jobs: [],
  error: "",
};

const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_JOBS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_JOBS_SUCCESS:
      return {
        loading: false,
        jobs: [...state.jobs, ...action.payload.jdList],
        count: action.payload.totalCount,
        error: "",
      };
    case FETCH_JOBS_FAILURE:
      return {
        loading: false,
        jobs: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default jobReducer;
