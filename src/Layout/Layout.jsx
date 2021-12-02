import React from "react";
import { Navbar } from "../components/Navbar";

export const Layout = ({children}) => {
  return (
    <div
      className="App grid h-screen"
      style={{ gridTemplateColumns: "20% 80%" }}
    >
      <Navbar />
      {children}
    </div>
  );
};
