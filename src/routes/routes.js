import {Navigate, createBrowserRouter} from "react-router-dom";
import DashboardLayout from "../layout/dashboard/DashboardLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import User from "../pages/dashboard/User";
import SignUp from "../pages/auth/SignUp";
import SignIn from "../pages/auth/SignIn";
import NotFound from "../pages/NotFound";

const token = localStorage.getItem("token")

const routes = createBrowserRouter([
  {
    path: '/',
    element: token ? <DashboardLayout /> : <Navigate to="/sign-in" />,
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
  {
    path: '*',
    element: <NotFound />
  }
]);

export default routes;