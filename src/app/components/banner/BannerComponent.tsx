import { ButtonComponent } from "src/app/components/button/ButtonComponent";
import { TypographyComponent } from "src/app/components/typography/TypographyComponent";
import { GLASS_STORE_LINKS } from "src/app/utils/constants";

export const BannerComponent = () => {
  return (
    <>
      <section
        className={`w-full h-[20rem] md:h-[40rem] lg:h-[53rem] bg-no-repeat 
        bg-[linear-gradient(180deg,rgba(19,38,68,0.26)_0%,rgba(19,38,68,0.26)_100%),url(/background.jpeg)]
        bg-cover bg-top sm:bg-left-top md:bg-center
        pt-12 pl-4 md:pt-28 md:pl-8 lg:pt-38 lg:pl-28`}
      >
        <article className={"flex flex-col gap-2 lg:gap-4"}>
          <TypographyComponent color={"white"} body={"h2"}>
            TRANSFORMA TU ESPACIO CON
          </TypographyComponent>
          <TypographyComponent color={"white"} body={"h1"}>
            ESTILO Y DISTINCIÓN
          </TypographyComponent>
          <TypographyComponent color={"white"} body={"body2"}>
            Dale un toque único a tu espacio con nuestros productos
            <br /> de alta calidad. Soluciones elegantes y personalizadas <br />
            para tu hogar o negocio.
          </TypographyComponent>
          <ButtonComponent
            href={GLASS_STORE_LINKS.whatsapp}
            pill
            label={"Contactanos"}
            type={"button"}
            size={"md"}
            color={"primary"}
          />
        </article>
      </section>
    </>
  );
};
