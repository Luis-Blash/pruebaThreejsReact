import React from "react";
import { Link } from "react-router-dom";
import { navbarPath } from "../types/router";

export const Navbar = () => {
  return (
    <>
      <div className="bg-blue-400">
        {navbarPath.map((data) => (
          <div key={data.key}>
            <Link to={data.path}>{data.name}</Link>
          </div>
        ))}
      </div>
    </>
  );
};
