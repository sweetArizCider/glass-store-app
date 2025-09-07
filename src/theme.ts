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
  navbar: {
    root: {
      base: "bg-blue-1000 px-2 py-2.5 sm:px-4 dark:border-gray-700 dark:bg-gray-800",
      rounded: {
        on: "rounded",
        off: "",
      },
      bordered: {
        on: "border",
        off: "",
      },
      inner: {
        base: "mx-auto flex flex-wrap items-center justify-between",
        fluid: {
          on: "",
          off: "container",
        },
      },
    },
    brand: {
      base: "flex items-center",
    },
    collapse: {
      base: "w-full md:block md:w-auto ",
      list: "mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium",
      hidden: {
        on: "hidden",
        off: "",
      },
    },
    link: {
      base: "block py-2 pl-3 pr-4 md:p-0 text-white",
      active: {
        on: "bg-transparent md:hover:bg-transparent hover:bg-gray-700 text-white md:bg-transparent md:text-white dark:text-white text-base mr-14",
        off: "border-b border-gray-100 text-white hover:bg-gray-50 md:border-0 md:hover:bg-transparent md:hover:text-primary-700 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-white",
      },
      disabled: {
        on: "text-white hover:cursor-not-allowed dark:text-gray-600",
        off: "",
      },
    },
    toggle: {
      base: "inline-flex items-center rounded-lg p-2 text-sm text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-700 md:hidden dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-600",
      icon: "h-6 w-6 shrink-0",
      title: "sr-only",
    },
  },
  footer: {
    root: {
      base: "w-full rounded-lg bg-white shadow md:flex md:items-center md:justify-between dark:bg-blue-1000",
      container: "w-full p-6",
      bgDark: "bg-blue-1000",
    },
    groupLink: {
      base: "flex flex-wrap text-sm text-gray-500 dark:text-white",
      link: {
        base: "me-4 last:mr-0 md:mr-6",
        href: "hover:underline",
      },
      col: "flex-col space-y-4",
    },
    icon: {
      base: "text-gray-500 dark:hover:text-white",
      size: "h-5 w-5",
    },
    title: {
      base: "mb-6 text-sm font-semibold uppercase text-gray-500 dark:text-white",
    },
    divider: {
      base: "my-6 w-full border-gray-200 sm:mx-auto lg:my-8 dark:border-gray-700",
    },
    copyright: {
      base: "text-sm text-gray-500 sm:text-center dark:text-gray-400",
      href: "ml-1 hover:underline",
      span: "ml-1",
    },
    brand: {
      base: "mb-4 flex items-center sm:mb-0",
      img: "mr-3 h-8",
      span: "self-center whitespace-nowrap text-2xl font-semibold text-gray-800 dark:text-white",
    },
  },
});
