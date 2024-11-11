import { Layout } from "../../components/Layout";
import { User } from "../../models/User";

interface Props {
  user: User;
}

export const DashboardPage = ({ user }: Props) => {
  return (
    <Layout>
      <h2>Dashboard Page</h2>
      <p>Hello, {user.name}!</p>
    </Layout>
  );
};
