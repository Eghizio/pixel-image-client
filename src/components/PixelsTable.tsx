import { Pixel } from "../models/Pixel";

interface Props {
  pixels: Pixel[];
  selectPixel: (pixelId: string) => void;
}

const formatTimeString = (time: string): string => {
  const date = new Date(time);

  const timeString = date.toLocaleTimeString();
  const dateString = date.toLocaleDateString();

  return `${timeString} ${dateString}`;
};

const copyTextToClipboard = async (text: string) => {
  if (!navigator.clipboard) return;
  return navigator.clipboard.writeText(text);
};

export const PixelsTable = ({ pixels, selectPixel }: Props) => {
  return (
    <article>
      <table className="text-left">
        <thead>
          <tr className="bg-slate-200">
            <th className="px-1 font-semibold">Name</th>
            <th className="px-1 font-semibold">Visits</th>
            <th className="px-1 font-semibold">Id</th>
            <th className="px-1 font-semibold">Created at</th>
          </tr>
        </thead>
        <tbody>
          {pixels.map((pixel) => (
            <tr
              key={pixel.id}
              className="odd:bg-white even:bg-slate-50 cursor-pointer hover:underline hover:brightness-90"
              onClick={() => selectPixel(pixel.id)}
            >
              <td className="px-1">{pixel.name}</td>
              <td className="px-1">{pixel.visits}</td>
              <td
                className="px-1 cursor-copy hover:text-blue-500"
                title="Copy ID"
                onClick={() => copyTextToClipboard(pixel.id)}
              >
                {pixel.id}
              </td>
              <td className="px-1">{formatTimeString(pixel.createdAt)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </article>
  );
};
