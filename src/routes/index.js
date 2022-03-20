import applicantsRoute from "./applicants";
import homeRouter from "./home";
import jobDetailsRouter from "./job-details";
import jobListRouter from "./jobList";
import loginRoute from "./login";
import myJobsRoute from "./my-jobs";
import postJobRouter from "./post-jobs";
import signUpRoute from "./signUp";

const routes = [
  jobListRouter,
  loginRoute,
  postJobRouter,
  signUpRoute,
  jobDetailsRouter,
  homeRouter,
  applicantsRoute,
  myJobsRoute,
];

export default routes;
