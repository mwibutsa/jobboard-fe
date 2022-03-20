import { lazy } from "react";

const homeRouter = {
  path: "/",
  component: lazy(() => import("pages/Jobs")),
  title: "Jobs",
  protected: false,
};

export default homeRouter;
