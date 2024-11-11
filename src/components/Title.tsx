import { useEffect } from "react";

interface Props {
  title: string;
}

export const Title = ({ title }: Props) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return null;
};
