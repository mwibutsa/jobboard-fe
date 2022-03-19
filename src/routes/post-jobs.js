import { lazy } from "react";

const postJobRouter = {
  path: "/post-job",
  component: lazy(() => import("pages/Jobs")),
  title: "Post a new job",
  protected: false,
};

export default postJobRouter;
