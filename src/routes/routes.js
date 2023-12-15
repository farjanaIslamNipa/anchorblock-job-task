import {createBrowserRouter} from "react-router-dom";
import DashboardLayout from "../layout/dashboard/DashboardLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import User from "../pages/dashboard/User";

const routes = createBrowserRouter([
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      {
        path: "/",
        element: <Dashboard />
      },
      {
        path: "/user",
        element: <User />
      },
    ]
  }
]);

export default routes;