import { classed } from "@tw-classed/react";

export const StyledHeader = classed.header(
  "bg-blue-500 text-white font-bold py-2 px-4"
);

export const Logo = classed.h1();

export const Button = classed.button({
  variants: {
    color: {
      primary: "text-white bg-blue-500",
      secondary: "text-white bg-gray-700",
    },
  },
});
