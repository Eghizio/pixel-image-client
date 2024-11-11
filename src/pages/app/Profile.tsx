import { ChangeForm } from "../../components/ChangeForm";
import { Layout } from "../../components/Layout";
import { Column } from "../../components/styled";
import { useUser } from "../../context/AppContext";
import { useAuth } from "../../context/AuthContext";

export const ProfilePage = () => {
  const { changeUserName, changeUserEmail } = useAuth();
  const user = useUser();

  return (
    <Layout>
      <Column>
        <h2>Profile Page</h2>
        <p>Hello, {user.name}!</p>

        <ChangeForm type="name" changeMethod={changeUserName} />

        <ChangeForm type="email" changeMethod={changeUserEmail} />
      </Column>
    </Layout>
  );
};
