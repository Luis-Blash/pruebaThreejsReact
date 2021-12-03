import React from "react";
import { Routes, Route } from "react-router-dom";
import { routesPath } from "../types/router";
import { Home } from "../View/Home";
import { About } from "../View/About";
import { Class1 } from "../components/clases/Class1";
import { Gsap1 } from "../components/gsap/Gsap1";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path={routesPath.home} element={<Home />} />
        <Route path={routesPath.about} element={<About />} />
        <Route path={routesPath.class1} element={<Class1 />} />
        <Route path={routesPath.gsap1} element={<Gsap1 />} />
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
