import homeRouter from "./home";
import jobDetailsRouter from "./job-details";
import jobListRouter from "./jobList";
import loginRoute from "./login";
import postJobRouter from "./post-jobs";
import signUpRoute from "./signUp";

const routes = [
  jobListRouter,
  loginRoute,
  postJobRouter,
  signUpRoute,
  jobDetailsRouter,
  homeRouter,
];

export default routes;
