import { lazy } from "react";

const jobDetailsRouter = {
  path: "/jobs/:id",
  component: lazy(() => import("pages/Jobs")),
  title: "Jobs details",
  protected: false,
};

export default jobDetailsRouter;
