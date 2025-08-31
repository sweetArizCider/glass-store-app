import { createTheme } from "flowbite-react";

export const customTheme = createTheme({
  button: {
    base: "flex flex-row items-center justify-center hover:cursor-pointer duration-200 font-inter h-13",
    color: {
      primary: "bg-blue-1000 hover:bg-blue-900 text-white font-medium ",
      secondary: "bg-white hover:bg-gray-50 text-blue-1000 font-bold",
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
  floatingLabel: {
    input: {
      default: {
        outlined: {
          md: "border-[#00000053] text-blue-1000 text-xl focus:border-[#00000093] duration-400 border-2 font-medium",
        },
      },
      error: {
        outlined: {
          md: "text-xl border-2 font-medium duration-400",
        },
      },
    },
    label: {
      default: {
        outlined: {
          md: "text-blue-1000 duration-400 peer-focus:text-primary-1000 text-xl peer-focus:-translate-y-[1.4rem] -translate-y-[1.4rem] peer-focus:-translate-x-[-.2rem] -translate-x-[-.2rem] font-medium peer-focus:font-medium hover:cursor-text",
        },
      },
      error: {
        outlined: {
          md: "text-xl font-medium duration-400 peer-focus:-translate-y-[1.4rem] -translate-y-[1.4rem] peer-focus:-translate-x-[-.2rem] -translate-x-[-.2rem]",
        },
      },
    },
  },
});
