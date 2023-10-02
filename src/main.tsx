import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import LoginRegister from "./Components/LoginRegister/LoginRegister.tsx";
import Layout from "./Components/Layout/Layout.tsx";
import LandingPage from "./Components/LandingPage/LandingPage22.tsx";
import HomeLayout from "./Components/Dashboard/HomeLayout.tsx";
import MyTasksLayout from "./Components/MyTasks/MyTasksLayout.tsx";
import UserLayout from "./Components/UserProfile/UserLayout.tsx";
import SetLayout from "./Components/SettingsPage/SetLayout.tsx";

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
    path: "/home",
    element: <HomeLayout />,
  },

  {
    path: "/project/:id",
    element: <Layout />,
  },
  {
    path: "/mytasks",
    element: <MyTasksLayout />,
  },
  {
    path: "/profile",
    element: <UserLayout />,
  },
  {
    path: "/settings",
    element: <SetLayout />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
