import type { SvgIconProps } from "@mui/material/SvgIcon";
import { Button } from "flowbite-react";
import type React from "react";

export type ButtonVariant = "primary" | "secondary";
type ButtonType = "button" | "submit" | "reset";
type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl" | "responsive";
interface ButtonProps {
  label: string;
  icon?: React.ComponentType<SvgIconProps>;
  type: ButtonType;
  size: ButtonSize;
  color: ButtonVariant;
  href?: string;
}

export const ButtonComponent = (
  buttonProps: ButtonProps,
): React.ReactElement => {
  const { type, href, color, label, size } = buttonProps;
  return (
    <>
      <Button type={type} size={size} color={color} pill href={href}>
        {label}
      </Button>
    </>
  );
};
