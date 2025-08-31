import { ThemeProvider } from "flowbite-react";
import { ButtonComponent } from "src/app/components/button/ButtonComponent";
import { InputComponent } from "src/app/components/input/InputComponent";
import { customTheme } from "src/theme";
import { ThemeInit } from "../../.flowbite-react/init";
import {TypographyComponent} from "src/app/components/typography/TypographyComponent";

export default function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <ThemeInit />
      <ButtonComponent
        size={"lg"}
        type={"button"}
        color={"primary"}
        label={"Continuar"}
        pill
        iconPositionRight
      />

      <div className={"w-96 m-3"}>
        <InputComponent
          label={"Nombre"}
          variant={"outlined"}
          helperText={"Aqui va tu nombre"}
        />

        <TypographyComponent color={"black"} body={"h1"}>
          Hey
        </TypographyComponent>
      </div>
    </ThemeProvider>
  );
}
