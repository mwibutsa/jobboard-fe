import { lazy } from "react";

const jobApplicationsRoute = {
  path: "/",
  component: lazy(() => import("pages/Jobs")),
  title: "Job applications",
  protected: false,
};

export default jobApplicationsRoute;
