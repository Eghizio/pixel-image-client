import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { AuthService } from "../api/AuthService";
import { User } from "../models/User";

export type AuthContextValue = {
  user: User | null;
  register: (email: string, password: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  changeUserName: (name: string) => Promise<void>;
  changeUserEmail: (email: string) => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("Auth Context must be used within Provider.");
  }

  return context;
};

type WithChildren = {
  children: ReactNode;
};

export const AuthContextProvider = ({ children }: WithChildren) => {
  const [user, setUser] = useState<User | null>(null);
  const auth = useMemo(() => new AuthService(), []);

  console.log(user);

  useEffect(() => {
    auth.getCurrentUser().then(setUser).catch();
  }, [auth]);

  const register = useCallback(
    async (email: string, password: string) => {
      const user = await auth.register(email, password);
      setUser(user);
    },
    [setUser]
  );

  const login = useCallback(
    async (email: string, password: string) => {
      const user = await auth.login(email, password);
      setUser(user);
    },
    [setUser]
  );

  const logout = useCallback(async () => {
    await auth.logout();
    setUser(null);
  }, [setUser]);

  const changeUserName = useCallback(
    async (name: string) => {
      const user = await auth.changeUsersName(name);
      setUser(user);
    },
    [setUser]
  );

  const changeUserEmail = useCallback(
    async (email: string) => {
      const user = await auth.changeUsersEmail(email);
      setUser(user);
    },
    [setUser]
  );

  const value = useMemo(
    () => ({ user, register, login, logout, changeUserName, changeUserEmail }),
    [user, register, login, logout, changeUserName, changeUserEmail]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
