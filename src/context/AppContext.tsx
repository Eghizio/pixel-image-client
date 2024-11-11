import { createContext, ReactNode, useContext, useMemo } from "react";
import { User } from "../models/User";

export type AppContextValue = {
  user: User;
};

const AppContext = createContext<AppContextValue | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error("App Context must be used within Provider.");
  }

  return context;
};

export const useUser = () => useAppContext().user;

type WithChildren<T> = T & {
  children: ReactNode;
};

interface Props {
  user: User;
}

export const AppContextProvider = ({ children, user }: WithChildren<Props>) => {
  const value = useMemo(
    () => ({
      user,
    }),
    [user]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
