import { FloatingLabel, HelperText } from "flowbite-react";

type InputVariant = "filled" | "outlined" | "standard";
type InputSize = "sm" | "md";

interface InputProps {
  label: string;
  variant: InputVariant;
  disabled?: boolean;
  error?: boolean;
  size?: InputSize;
  helperText?: string;
}
const helpTextMarginTop = "mt-[-.01rem]";
export const InputComponent = (inputProps: InputProps) => {
  //TODO: ENABLE sm AT THE MOMENT md JUST AVAILABLE 👾
  const {
    label,
    variant,
    disabled,
    error,
    size = "md",
    helperText,
  } = inputProps;
  return (
    <>
      <FloatingLabel
        label={label}
        variant={variant}
        disabled={disabled}
        color={error ? "error" : undefined}
        sizing={size}
      />
      {helperText && (
        <HelperText
          className={
            error ? `text-red-600 ${helpTextMarginTop}` : helpTextMarginTop
          }
        >
          {helperText}
        </HelperText>
      )}
    </>
  );
};
