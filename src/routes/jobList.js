import { lazy } from "react";

const jobListRouter = {
  path: "/jobs",
  component: lazy(() => import("pages/Jobs")),
  title: "Jobs",
  protected: false,
};

export default jobListRouter;
