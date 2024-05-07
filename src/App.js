import { useSelector } from "react-redux";
import "./App.css";
import FilterComponent from "./components/FilterComponent";
import JobList from "./components/JobList";

function App() {
  const { count } = useSelector((state) => state.jobs);
  return (
    <div className="App">
      <header className="header">
        <p className="header-title">Search Jobs</p>
        <span className="job-count">{count}</span>
      </header>
      <FilterComponent />
      <JobList />
    </div>
  );
}

export default App;
