import {createBrowserRouter} from "react-router-dom";
import DashboardLayout from "../layout/dashboard/DashboardLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import User from "../pages/dashboard/User";
import SignUp from "../pages/auth/SignUp";
import SignIn from "../pages/auth/SignIn";

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
        path: "/users",
        element: <User />
      },
    ]
  },
  {
    path: '/sign-up',
    element: <SignUp />
  },
  {
    path: '/sign-in',
    element: <SignIn />
  },
]);

export default routes;