import { AuthContextProvider } from "./context/AuthContext";
import { Router } from "./routing/Router";

export const App = () => (
  <AuthContextProvider>
    <Router />
  </AuthContextProvider>
);
