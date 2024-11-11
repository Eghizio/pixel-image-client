import { Layout } from "../../components/Layout";
import { User } from "../../models/User";

interface Props {
  user: User;
}

export const ProfilePage = ({ user }: Props) => {
  return (
    <Layout>
      <h2>Profile Page</h2>
      <p>Hello, {user.name}!</p>
    </Layout>
  );
};
