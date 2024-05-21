// src/App.tsx
import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  RouteObject,
} from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import PrivateRoute from "./components/PrivateRoute";
import DataTable from "./pages/DataTable";
import CreateUser from "./pages/CreateUser";

const routes: RouteObject[] = [
  { path: "/", element: <Login /> },
  {
    path: "/profile",
    element: <PrivateRoute />, // Use PrivateRoute here
    children: [{ path: "", element: <Profile /> }],
  },
  {
    path: "/data-table",
    element: <PrivateRoute />, // Use PrivateRoute here
    children: [{ path: "", element: <DataTable /> }],
  },
  {
    path: "/create-user",
    element: <PrivateRoute />, // Use PrivateRoute here
    children: [{ path: "", element: <CreateUser /> }],
  },
];

const router = createBrowserRouter(routes);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
