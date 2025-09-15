import type { SvgIconProps } from "@mui/material/SvgIcon";
import { Button } from "flowbite-react";
import type React from "react";

export type ButtonVariant = "primary" | "secondary";
type ButtonType = "button" | "submit" | "reset";
type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl" | "responsive" | "rounded";
interface ButtonProps {
  label?: string;
  Icon?: React.ComponentType<SvgIconProps>;
  type: ButtonType;
  size: ButtonSize;
  color: ButtonVariant;
  pill?: boolean;
  iconPositionRight?: boolean;
  href?: string;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export const ButtonComponent = (
  buttonProps: ButtonProps,
): React.ReactElement => {
  const {
    type,
    href,
    color,
    label,
    size,
    Icon,
    pill,
    disabled,
    iconPositionRight,
    className,
    children,
  } = buttonProps;
  return (
    <Button
      type={type}
      size={size}
      color={color}
      pill={pill}
      href={href}
      disabled={disabled}
      className={className}
    >
      {Icon && !iconPositionRight && <Icon className={"mr-3"} />}
      {label}
      {children}
      {Icon && iconPositionRight && <Icon className={"ml-3"} />}
    </Button>
  );
};
