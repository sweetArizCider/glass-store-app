import type { SvgIconProps } from "@mui/material/SvgIcon";
import { Button } from "flowbite-react";
import type React from "react";

export type ButtonVariant = "primary" | "secondary";
type ButtonType = "button" | "submit" | "reset";
type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl" | "responsive";
interface ButtonProps {
  label: string;
  Icon?: React.ComponentType<SvgIconProps>;
  type: ButtonType;
  size: ButtonSize;
  color: ButtonVariant;
  pill: boolean | undefined;
  iconPositionRight?: boolean
  href?: string;
  disabled?: boolean;
}

export const ButtonComponent = (
  buttonProps: ButtonProps,
): React.ReactElement => {
  const { type, href, color, label, size, Icon, pill, disabled, iconPositionRight } = buttonProps;
  return (
    <Button type={type} size={size} color={color} pill={pill} href={href} disabled={disabled}>
      {Icon && !iconPositionRight && <Icon className={"mr-3"}></Icon>}
      {label}
      {Icon && iconPositionRight && <Icon className={"ml-3"}></Icon>}
    </Button>
  );
};
