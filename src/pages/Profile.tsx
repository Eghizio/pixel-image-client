import { Layout } from "../components/Layout";
import { useAuth } from "../context/AuthContext";

interface Props {} // get user from ProtectedRoute.

export const ProfilePage = ({}: Props) => {
  const { user } = useAuth();

  return (
    <Layout>
      <h2>Profile Page</h2>
      {user ? <p>Hello, {user.name}!</p> : null}
    </Layout>
  );
};
