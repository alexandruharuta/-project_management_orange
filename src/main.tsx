import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginRegister from "./Components/LoginRegister/LoginRegister.tsx";
import Layout from "./Components/Layout/Layout.tsx";
import LandingPage from "./Components/LandingPage/LandingPage.tsx";
import MyTasks from "./Components/MyTasks/MyTasks.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },

  {
    path: "register",
    element: <LoginRegister />,
  },

  {
    path: "project",
    element: <Layout />,
  },
  {
    path: "/mytasks",
    element: <MyTasks />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
