import React from "react";

type BodyType = 'h1' | 'h2' | 'h3' | 'body1' | 'body2' | ''
type ColorType = 'blue' | 'black' | 'white';
interface TypographyProps {
 children: React.ReactNode;
 bold?: boolean;
 montserrat?: boolean;
 color: ColorType;
 body: BodyType;
}
export const TypographyComponent =
  (typographyProps : TypographyProps) => {
  const {children } = typographyProps
  return(
    <>
      <p>{children}</p>
    </>
  )

}
