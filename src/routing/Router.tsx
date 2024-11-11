import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "../pages/Home";
import { AuthPage } from "../pages/Auth";
import { ProfilePage } from "../pages/Profile";
import { DashboardPage } from "../pages/Dashboard";
import { NotFoundPage } from "../pages/NotFound";

export enum Path {
  Home = "/",
  Auth = "/auth",
  AuthRegister = "/auth?register=true",
  AuthLogin = "/auth?login=true",
  App = "/app",
  Profile = "/app/profile",
  Dashboard = "/app/dashboard",
}

const router = createBrowserRouter(
  [
    {
      path: Path.Home,
      element: <HomePage />,
    },
    {
      path: Path.Auth,
      element: <AuthPage />,
    },
    {
      path: Path.App,
      children: [
        {
          path: Path.Profile,
          element: <ProfilePage />,
        },
        {
          path: Path.Dashboard,
          element: <DashboardPage />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ],
  {
    future: {
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_relativeSplatPath: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

export const Router = () => (
  <RouterProvider router={router} future={{ v7_startTransition: true }} />
);
