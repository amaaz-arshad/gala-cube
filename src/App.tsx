import React from "react";
import "./App.css";
import LandingPage from "./screens/landing-page/landing-page";
import CreateEvent from "./screens/landing-page/create-event";
import Signup from "./screens/signup-login/signup";
import Login from "./screens/signup-login/login";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/create-event",
      element: <CreateEvent />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
