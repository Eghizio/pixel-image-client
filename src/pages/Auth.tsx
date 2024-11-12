import { Navigate, NavLink, useSearchParams } from "react-router-dom";
import { Layout } from "../components/Layout";
import { AuthForm } from "../components/AuthForm";
import { Column, Link } from "../components/styled";
import { useAuth } from "../context/AuthContext";
import { Path } from "../routing/Router";

export const AuthPage = () => {
  const { user, register, login } = useAuth();
  const [params] = useSearchParams();

  const isRegister = params.get("register") === "true";

  const formType = isRegister ? "Register" : "Login";
  const authMethod = isRegister ? register : login;

  return (
    <Layout>
      {user !== null ? (
        <Navigate to={Path.Dashboard} />
      ) : (
        <Column align="center">
          <AuthForm type={formType} authMethod={authMethod} />

          {isRegister ? (
            <p>
              Already have an account?{" "}
              <Link>
                <NavLink to={Path.AuthLogin}>Login</NavLink>
              </Link>
            </p>
          ) : (
            <p>
              Don't have an account?{" "}
              <Link>
                <NavLink to={Path.AuthRegister}>Register</NavLink>
              </Link>
            </p>
          )}
        </Column>
      )}
    </Layout>
  );
};
