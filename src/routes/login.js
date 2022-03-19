import { lazy } from "react";

const loginRoute = {
  path: "/login",
  component: lazy(() => import("pages/Jobs")),
  title: "Login",
  protected: false,
};

export default loginRoute;
