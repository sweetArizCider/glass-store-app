import AddIcon from "@mui/icons-material/Add";
import { ButtonComponent } from "src/app/components/button/ButtonComponent";
import { TypographyComponent } from "src/app/components/typography/TypographyComponent";

export const ProductCarousel = () => {
  return (
    <>
      <header>
        <TypographyComponent
          color={"black"}
          body={"h2"}
          bold
          className={"pt-10 pl-4 md:pt-12 md:pl-8 lg:pt-14 lg:pl-28"}
        >
          BUSCAR POR CATEGORIA
        </TypographyComponent>
      </header>
      <section>
        <article
          className={`w-80 h-80 bg-no-repeat 
        bg-[linear-gradient(180deg,rgba(0,0,0,0.53)_0%,rgba(0,0,0,0.25)_36%),url(/pasamanosEscaleraCoralVidrio.png)]
        bg-cover bg-center rounded-3xl relative`}
        >
          <TypographyComponent
            color={"white"}
            bold
            body={"body1"}
            className={`
            absolute top-8 left-8
          `}
          >
            Papel Tapiz
          </TypographyComponent>
          <ButtonComponent
            className={`
            absolute bottom-6 right-6 bg-white hover:bg-gray-100 text-blue-1000 font-bold
          `}
            type={"button"}
            size={"rounded"}
            color={"primary"}
          >
            <AddIcon fontSize={"large"} />
          </ButtonComponent>
        </article>
      </section>
    </>
  );
};
