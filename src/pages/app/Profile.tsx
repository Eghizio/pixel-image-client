import { SimpleForm } from "../../components/SimpleForm";
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

        <SimpleForm
          formLabel="Change Name"
          buttonLabel="Update"
          type="text"
          name="name"
          defaultValue={user["name"]}
          changeMethod={changeUserName}
        />

        <SimpleForm
          formLabel="Change Email"
          buttonLabel="Update"
          type="email"
          name="email"
          defaultValue={user["email"]}
          changeMethod={changeUserEmail}
        />
      </Column>
    </Layout>
  );
};
