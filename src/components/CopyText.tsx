interface Props {
  children: string;
}

const copyTextToClipboard = async (text: string) => {
  if (!navigator.clipboard) return;
  return navigator.clipboard.writeText(text);
};

export const CopyText = ({ children: text }: Props) => {
  const copyText = () => copyTextToClipboard(text);

  return (
    <article>
      <pre
        className="p-1 cursor-copy bg-blue-200 hover:text-blue-500"
        onClick={copyText}
      >
        {text}
      </pre>
    </article>
  );
};
