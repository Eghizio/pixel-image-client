import { Layout } from "../../components/Layout";
import { useUser } from "../../context/AppContext";

export const ProfilePage = () => {
  const user = useUser();

  return (
    <Layout>
      <h2>Profile Page</h2>
      <p>Hello, {user.name}!</p>
    </Layout>
  );
};
