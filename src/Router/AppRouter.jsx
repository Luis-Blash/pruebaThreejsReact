import React from "react";
import { Routes, Route } from "react-router-dom";
import { routesPath } from "../types/router";
import { Home } from "../View/Home";
import { About } from "../View/About";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path={routesPath.home} element={<Home />} />
        <Route path={routesPath.about} element={<About />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </>
  );
};
