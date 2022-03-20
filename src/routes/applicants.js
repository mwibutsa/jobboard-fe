import { lazy } from "react";

const applicantsRoute = {
  path: "/applicants",
  component: lazy(() => import("pages/Applicants")),
  title: "Job applications",
  protected: false,
};

export default applicantsRoute;
