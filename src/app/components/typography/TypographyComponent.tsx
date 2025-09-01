import type React from "react";

type BodyType = "h1" | "h2" | "h3" | "body1" | "body2" | "";
type ColorType = "blue" | "black" | "white" | "link";
type AlignType = "left" | "right" | "end" | "start" | "center";
interface TypographyProps {
  children: React.ReactNode;
  bold?: boolean;
  montserrat?: boolean;
  color: ColorType;
  body: BodyType;
  align?: AlignType;
}
export const TypographyComponent = (typographyProps: TypographyProps) => {
  const {
    children,
    body,
    color,
    bold,
    montserrat,
    align = "left",
  } = typographyProps;

  const getColor = (color: ColorType) => {
    switch (color) {
      case "black":
        return "text-black";
      case "blue":
        return "text-blue-1000";
      case "link":
        return "text-blue-450";
      case "white":
        return "text-white";
    }
  };

  const renderTypography = (bodyType: BodyType) => {
    switch (bodyType) {
      case "h1":
        return (
          <h1
            className={`text-6xl font-montserrat ${isBold ?? "font-extrabold"} text-pretty text-${align}`}
          >
            {children}
          </h1>
        );
      case "h2":
        return (
          <h2
            className={`text-4xl font-montserrat ${isBold ?? "font-medium"} ${typographyColor} text-pretty`}
          >
            {children}
          </h2>
        );
      case "h3":
        return (
          <h3
            className={`text-3xl font-montserrat ${isBold ?? "font-medium"} ${typographyColor} text-pretty`}
          >
            {children}
          </h3>
        );
      case "body1":
        return (
          <p
            className={`text-xl ${isMontserrat} ${isBold ?? "font-normal"} ${typographyColor} text-pretty`}
          >
            {children}
          </p>
        );
      case "body2":
        return (
          <p
            className={`text-xs ${isMontserrat} ${isBold ?? "font-normal"} ${typographyColor} text-pretty`}
          >
            {children}
          </p>
        );
    }
  };
  const isMontserrat = montserrat ? "font-montserrat" : null;
  const isBold = bold ? "font-bold" : null;
  const typographyColor = getColor(color);
  return renderTypography(body);
};
