import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { ReactNode } from "react";
import { User } from "../models/User";

interface Props {
  redirectTo: string;
  children?: (user: User) => ReactNode;
}

export const PrivateRoute = ({ redirectTo, children }: Props) => {
  const { user } = useAuth();

  const isAllowed = user !== null;

  if (!isAllowed) return <Navigate to={redirectTo} replace />;

  return children ? children(user) : <Outlet />;
};
