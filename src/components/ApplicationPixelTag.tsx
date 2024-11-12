import { PixelTag } from "./PixelTag";

const isDevelopment = location.origin === "http://localhost:5173";

const pixelId = isDevelopment
  ? "6bde45ca-cdbb-4198-9575-5648f70e85c7"
  : "ce91147c-f5ce-4837-b2a9-a3ecbd94c031";

export const ApplicationPixelTag = () => <PixelTag pixelId={pixelId} />;
