import type { ButtonProps } from "src/app/layouts/button/Button";

export const applyButtonVariant = (buttonProps: ButtonProps): string => {
  const buttonVariant = buttonProps.variant;
  switch (buttonVariant) {
    case "primary":
      return "bg-blue-950 text-white font-medium text-[26px]";
    case "secondary":
      return "bg-white text-blue-950 font-bold text-2xl hover:bg-blue-50";
    default:
      return `${buttonVariant}`;
  }
};
