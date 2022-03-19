import { lazy } from "react";

const signUpRoute = {
  path: "/sign-up",
  component: lazy(() => import("pages/Jobs")),
  title: "Sign up",
  protected: false,
};

export default signUpRoute;
