import LoadPage from "components/LoadPage";
import PageLayout from "HOC/PageLayout";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "routes";
import "./App.less";

const App = () => {
  return (
    <BrowserRouter>
      <PageLayout>
        <React.Suspense fallback={<LoadPage />}>
          <Routes>
            {routes.map(
              ({ path, component: Component, isProtected, title }) => {
                return <Route path={path} element={<Component />} key={path} />;
              }
            )}
          </Routes>
        </React.Suspense>
      </PageLayout>
    </BrowserRouter>
  );
};

export default App;
