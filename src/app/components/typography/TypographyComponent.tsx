import type React from "react";

type BodyType = "h1" | "h2" | "h3" | "body1" | "body2";
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
    const colorClassMap = {
      black: "text-black",
      blue: "text-blue-1000",
      link: "text-blue-450",
      white: "text-white",
    };
    return colorClassMap[color];
  };

  const getAlignClass = (align: AlignType) => {
    const alignClassMap = {
      left: "text-left",
      right: "text-right",
      center: "text-center",
      start: "text-start",
      end: "text-end",
    };
    return alignClassMap[align] || "text-left";
  };

  const alignClass = getAlignClass(align);
  const isMontserrat = montserrat ? "font-montserrat" : null;
  const isBold = bold ? "font-bold" : null;
  const colorClass = getColor(color);

  const renderTypography = (bodyType: BodyType) => {
    switch (bodyType) {
      case "h1":
        return (
          <h1
            className={`text-6xl font-montserrat ${isBold ?? "font-extrabold"} text-pretty ${alignClass}`}
          >
            {children}
          </h1>
        );
      case "h2":
        return (
          <h2
            className={`text-4xl font-montserrat ${isBold ?? "font-medium"} ${colorClass} text-pretty ${alignClass}`}
          >
            {children}
          </h2>
        );
      case "h3":
        return (
          <h3
            className={`text-3xl font-montserrat ${isBold ?? "font-medium"} ${colorClass} text-pretty ${alignClass}`}
          >
            {children}
          </h3>
        );
      case "body1":
        return (
          <p
            className={`text-xl ${isMontserrat} ${isBold ?? "font-normal"} ${colorClass} text-pretty ${alignClass}`}
          >
            {children}
          </p>
        );
      case "body2":
        return (
          <p
            className={`text-xs ${isMontserrat} ${isBold ?? "font-normal"} ${colorClass} text-pretty ${alignClass}`}
          >
            {children}
          </p>
        );
    }
  };
  return renderTypography(body);
};
