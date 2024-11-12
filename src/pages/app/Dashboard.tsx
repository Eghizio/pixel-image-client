import { useState } from "react";
import { CopyText } from "../../components/CopyText";
import { Layout } from "../../components/Layout";
import { PixelsTable } from "../../components/PixelsTable";
import { SimpleForm } from "../../components/SimpleForm";
import { Column, Section } from "../../components/styled";
import { usePixels, useUser } from "../../context/AppContext";

const EXAMPLE_PIXEL_ID = "EXAMPLE-PIXEL-ID-REPLACE-WITH-YOURS";

const isDevelopment = location.origin === "http://localhost:5173";
const BASE_URL = isDevelopment
  ? "http://localhost:4000/p.png?id="
  : "https://frog02-40476.wykr.es/p.png?id=";

const createPixelLink = (pixelId: string) => `${BASE_URL}${pixelId}`;

const createPixelImageTag = (pixelId: string) =>
  `<img src="${createPixelLink(
    pixelId
  )}" alt="" width="1" height="1" style="display: none" />`;

const examplePixelLink = createPixelLink(EXAMPLE_PIXEL_ID);
const examplePixelImageTag = createPixelImageTag(EXAMPLE_PIXEL_ID);

export const DashboardPage = () => {
  const user = useUser();
  const { pixels, createPixel, deletePixel } = usePixels();
  const [selectedPixelId, setSelectedPixelId] = useState("");

  const selectedPixelImageTag = createPixelImageTag(selectedPixelId);

  return (
    <Layout>
      <Column>
        <h2>Dashboard Page</h2>
        <p>Hello, {user.name}!</p>

        <Section>
          <h3>How to use</h3>

          <ol>
            <li>
              Replace the ID in link with the ID of your Pixel -{" "}
              <i>an unique tracker for page visits.</i>
            </li>
            <li>
              Embedd this link <b>as an Image</b> on your Websites or GitHub
              README.
            </li>
          </ol>
        </Section>

        <Section>
          <h3>Click to copy</h3>

          <Column>
            <CopyText>{examplePixelLink}</CopyText>
            <CopyText>{examplePixelImageTag}</CopyText>
          </Column>
        </Section>

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

        <Section>
          <h3>Click to copy selected Pixel image tag from the table below</h3>

          <Column>
            {selectedPixelId ? (
              <CopyText>{selectedPixelImageTag}</CopyText>
            ) : null}
          </Column>
        </Section>

        <PixelsTable pixels={pixels} selectPixel={setSelectedPixelId} />
      </Column>
    </Layout>
  );
};
