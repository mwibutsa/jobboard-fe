import { combineReducers } from "redux";
import getJobs from "reduxStore/reducers/jobs/getJobs";
import jobApplication from "reduxStore/reducers/jobs/jobApplication";
import applicantsReducer from "./jobs/getJobApplicants";
import getRecruiterJobs from "./jobs/getRecruiterJobs";

const rootReducer = combineReducers({
  getJobs,
  jobApplication,
  jobApplicants: applicantsReducer,
  recruiterJobs: getRecruiterJobs,
});

export default rootReducer;
