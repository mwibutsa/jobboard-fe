import { combineReducers } from "redux";
import getJobs from "reduxStore/reducers/jobs/getJobs";
import jobApplication from "reduxStore/reducers/jobs/jobApplication";

const rootReducer = combineReducers({ getJobs, jobApplication });

export default rootReducer;
