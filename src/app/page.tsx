import { ThemeProvider } from "flowbite-react";
import { ButtonComponent } from "src/app/components/button/ButtonComponent";
import { customTheme } from "src/theme";
import { ThemeInit } from "../../.flowbite-react/init";
import { InputComponent } from "src/app/components/input/InputComponent"

export default function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <ThemeInit />
      <ButtonComponent
        size={"lg"}
        type={"button"}
        color={"secondary"}
        label={"Continuar"}
        pill
        iconPositionRight
      />

      <InputComponent
        size={"sm"}
        label={"Name"}
        variant={"outlined"}
        helperText={"Aqui va tu nombre"}
        disabled
      />
    </ThemeProvider>
  );
}
