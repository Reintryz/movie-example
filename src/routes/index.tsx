import Authentication from "../assets/features/auth";
import Details from "../assets/features/details";
import Home from "../assets/features/home";
import Layout from "../assets/components/layout";
import Movie from "../assets/features/movie";
import ProtectedRoutes from "./protected-routes";
import TvShows from "../assets/features/tv-shows";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Authentication />,
  },
  {
    element: <ProtectedRoutes />,
    children: [
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "/detail/:id",
            element: <Details />,
          },
          {
            path: "/movie",
            element: <Movie />,
          },
          {
            path: "/tv-show",
            element: <TvShows />,
          },
          {
            path: "/login",
            element: <Authentication />,
          },
        ],
      },
    ],
  },
]);
