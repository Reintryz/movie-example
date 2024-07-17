import "./index.css";

import { Router, RouterProvider } from "react-router-dom";

import Home from "./assets/features/home";
import React from "react";
import ReactDOM from "react-dom/client";
import { router } from "./routes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
