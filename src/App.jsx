import LoadPage from "components/LoadPage";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "routes";
import "./App.less";
const App = () => {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<LoadPage />}>
        {/* <ErrorBoundary> */}
        <Routes>
          {routes.map(({ path, title, component: Component, isProtected }) => {
            document.title = title;
            return <Route path={path} element={<Component />} key={path} />;
          })}
        </Routes>
        {/* </ErrorBoundary> */}
      </React.Suspense>
    </BrowserRouter>
  );
};

export default App;
