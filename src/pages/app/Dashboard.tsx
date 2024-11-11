import { Layout } from "../../components/Layout";
import { useUser } from "../../context/AppContext";

export const DashboardPage = () => {
  const user = useUser();

  return (
    <Layout>
      <h2>Dashboard Page</h2>
      <p>Hello, {user.name}!</p>
    </Layout>
  );
};
