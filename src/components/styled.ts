import { classed } from "@tw-classed/react";

export const Button = classed.button("px-4 py-1", "hover:brightness-90", {
  variants: {
    variant: {
      primary: "text-white bg-blue-500",
      secondary: "text-white bg-gray-700",
      danger: "text-white bg-red-600",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export const StyledHeader = classed.header(
  "w-100 h-12 px-4 py-2 bg-blue-700 text-white font-bold flex items-center justify-between"
);

export const Logo = classed.h1("m-0 flex items-center gap-1", "text-2xl");

export const Navigation = classed.nav("flex gap-4");

export const PageLayout = classed.div("w-screen");

export const PageContent = classed.main("h-screen p-4");

export const Form = classed.form(
  "p-4 bg-gray-100 flex flex-col items-center gap-2"
);

export const Input = classed.input("w-[275px] px-2 py-1 border");

export const Column = classed.div("flex flex-col gap-2", {
  variants: {
    align: {
      start: "items-start",
      center: "items-center",
    },
  },
  defaultVariants: {
    align: "start",
  },
});

export const Link = classed.span("text-blue-900 underline");

export const Section = classed.section("px-2 py-4 bg-slate-100");
