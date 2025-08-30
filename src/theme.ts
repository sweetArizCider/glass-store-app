import { createTheme } from "flowbite-react";

export const customTheme = createTheme({
  button: {
    base: "flex flex-row items-center justify-center hover:cursor-pointer duration-200 font-inter h-13",
    color: {
      primary: "bg-blue-1000 hover:bg-blue-1000 text-white font-medium ",
      secondary: "bg-white hover:bg-white text-blue-1000 font-bold",
    },
    pill: "rounded-4xl",
    size: {
      xl: "w-96 text-2xl",
      lg: "w-80 text-2xl",
      md: "w-72 text-base",
      sm: "w-64 text-base",
      xs: "w-56 text-sm",
      responsive: [
        "w-56 text-base",
        "sm:w-64 sm:text-lg",
        "md:w-72 md:text-xl",
        "lg:w-80 lg:text-2xl",
        "xl:w-96",
      ].join(" "),
    },
  },
});
