import { lazy } from "react";

const myJobsRoute = {
  path: "/my-jobs",
  component: lazy(() => import("pages/Applicants")),
  title: "Job applications",
  protected: false,
};

export default myJobsRoute;
