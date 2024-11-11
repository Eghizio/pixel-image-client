import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { ReactNode } from "react";
import { AppContextProvider } from "../context/AppContext";

interface Props {
  redirectTo: string;
  children?: ReactNode;
}

export const PrivateRoute = ({ redirectTo, children }: Props) => {
  const { user } = useAuth();

  const isAllowed = user !== null;

  if (!isAllowed) return <Navigate to={redirectTo} replace />;

  return (
    <AppContextProvider user={user}>
      {children ? children : <Outlet />}
    </AppContextProvider>
  );
};
