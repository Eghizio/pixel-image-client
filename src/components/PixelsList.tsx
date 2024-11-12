import { Pixel } from "../models/Pixel";

interface Props {
  pixels: Pixel[];
}

export const PixelsList = ({ pixels }: Props) => {
  return (
    <article>
      <h3>Pixels:</h3>
      <ol>
        {pixels.map((pixel) => (
          <li key={pixel.id}>
            <pre>{JSON.stringify(pixel, null, 2)}</pre>
          </li>
        ))}
      </ol>
      ;
    </article>
  );
};
