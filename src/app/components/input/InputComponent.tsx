import { FloatingLabel, HelperText } from "flowbite-react";

type InputVariant = "filled" | "outlined" | "standard";
type ErrorColor = "error";
type InputSize = "sm" | "md";

interface InputProps {
  label: string;
  variant: InputVariant;
  disabled?: boolean;
  color?: ErrorColor;
  size?: InputSize;
  helperText?: string;
}
export const InputComponent = (inputProps: InputProps) => {
  const { label, variant, disabled, color, size, helperText } = inputProps;
  return (
    <>
      <FloatingLabel
        label={label}
        variant={variant}
        disabled={disabled}
        color={color}
        sizing={size}
      />
      {helperText && <HelperText>{helperText}</HelperText>}
    </>
  );
};
