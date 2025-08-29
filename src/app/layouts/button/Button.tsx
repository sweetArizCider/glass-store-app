import Link from "next/link";
import type React from "react";
import { applyButtonVariant } from "src/app/layouts/button/helperFunctions";

export interface ButtonProps {
  label: string;
  type: "button" | "submit" | "reset";
  variant: "primary" | "secondary" | string;
  redirectTo?: string;
}

const buttonStyles = `
  hover:cursor-pointer
  duration-200
  flex
  flex-row
  items-center
  justify-center
  h-16
  m-4
  rounded-4xl
  font-inter
`;

export const Button = (buttonProps: ButtonProps): React.ReactElement => {
  return (
    <>
      {buttonProps.redirectTo ? (
        <Link
          href={buttonProps.redirectTo}
          className={`
            ${applyButtonVariant(buttonProps)}
            ${buttonStyles}
          `}
        >
          {buttonProps.label}
        </Link>
      ) : (
        <button
          type={buttonProps.type}
          className={`
          ${applyButtonVariant(buttonProps)}
          ${buttonStyles}
        `}
        >
          {buttonProps.label}
        </button>
      )}
    </>
  );
};
