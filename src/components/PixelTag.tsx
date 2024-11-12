interface Props {
  pixelId: string;
  invisible?: boolean;
}

const isDevelopment = location.origin === "http://localhost:5173";
const BASE_URL = isDevelopment
  ? "http://localhost:4000/p.png?id="
  : "https://frog02-40476.wykr.es/p.png?id=";

export const PixelTag = ({ pixelId, invisible = true }: Props) => (
  <img
    src={`${BASE_URL}${pixelId}`}
    alt=""
    width="1"
    height="1"
    style={{ display: invisible ? "none" : "inline-block" }}
  />
);
