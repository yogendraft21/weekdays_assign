import {
  FETCH_JOBS_FAILURE,
  FETCH_JOBS_REQUEST,
  FETCH_JOBS_SUCCESS,
  RESET_JOBS,
  SEARCH_JOBS,
  UPDATE_FILTERS,
} from "../actions/jobActions";

const initialState = {
  loading: false,
  jobs: [],
  error: "",
  filters: {},
  search: "",
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
        ...state,
        loading: false,
        jobs: [...state.jobs, ...action.payload.jdList],
        count: action.payload.totalCount,
        error: "",
      };
    case FETCH_JOBS_FAILURE:
      return {
        ...state,
        loading: false,
        jobs: [],
        error: action.payload,
      };
    case UPDATE_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          ...action.payload,
        },
      };
    case RESET_JOBS:
      return {
        ...state,
        jobs: [],
      };
    case SEARCH_JOBS: {
      return {
        ...state,
        search: action.payload,
      };
    }
    default:
      return state;
  }
};

export default jobReducer;
