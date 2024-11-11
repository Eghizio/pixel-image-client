import { Layout } from "../components/Layout";
import { useAuth } from "../context/AuthContext";

export const DashboardPage = () => {
  const { user } = useAuth();

  return (
    <Layout>
      <h2>Dashboard Page</h2>
      {user ? <p>Hello, {user.name}!</p> : null}
    </Layout>
  );
};
