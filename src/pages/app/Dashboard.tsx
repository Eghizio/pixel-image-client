import { Layout } from "../../components/Layout";
import { SimpleForm } from "../../components/SimpleForm";
import { Column } from "../../components/styled";
import { usePixels, useUser } from "../../context/AppContext";

export const DashboardPage = () => {
  const user = useUser();
  const { pixels, createPixel, deletePixel } = usePixels();

  return (
    <Layout>
      <Column>
        <h2>Dashboard Page</h2>
        <p>Hello, {user.name}!</p>

        <SimpleForm
          formLabel="Create Pixel"
          buttonLabel="Create"
          type="text"
          name="pixel-name"
          defaultValue="GitHub README"
          changeMethod={createPixel}
        />

        <SimpleForm
          formLabel="Delete Pixel"
          buttonLabel="Delete"
          type="text"
          name="pixel-id"
          defaultValue="pixel-id-here"
          changeMethod={deletePixel}
        />

        <div>
          <h3>Pixels list:</h3>
          <ul>
            {pixels.map((pixel) => (
              <li key={pixel.id}>
                <pre>{JSON.stringify(pixel, null, 2)}</pre>
              </li>
            ))}
          </ul>
        </div>
      </Column>
    </Layout>
  );
};
