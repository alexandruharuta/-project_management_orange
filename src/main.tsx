import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LoginRegister from "./components/login-register/LoginRegister.tsx";
import Layout from "./components/layout/Layout.tsx";
import LandingPage from "./pages/landing-page/LandingPage.tsx";
import MyTasks from "./components/my-tasks/MyTasks.tsx";

import "./index.css";

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
