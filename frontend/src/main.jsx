import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import RegisterPage from "./pages/register.jsx";

import "./styles/global.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // children: [
    //   {
    //     path: "register",
    //     element: <RegisterPage />,
    //   },
    // ],
  },
  {
    path: "register",
    element: <RegisterPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
