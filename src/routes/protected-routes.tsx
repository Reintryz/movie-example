import { Navigate, Outlet, useLocation } from "react-router-dom";

import React from "react";

const ProtectedRoutes = () => {
  const { pathname } = useLocation();

  const token = localStorage.getItem("token");

  const tokenProtected = ["/", "/detail/:id", "/movie", "/tv-shows"];
  const publicProtected = ["/login"];

  if (tokenProtected.includes(pathname)) {
    if (!token) {
      return <Navigate to={"/login"} />;
    }
  }

  if (publicProtected.includes(pathname)) {
    if (token) {
      return <Navigate to={"/"} />;
    }
  }

  return <Outlet />;
};

export default ProtectedRoutes;
