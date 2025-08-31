import { ThemeProvider } from "flowbite-react";
import { ButtonComponent } from "src/app/components/button/ButtonComponent";
import { customTheme } from "src/theme";
import { ThemeInit } from "../../.flowbite-react/init";

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
    </ThemeProvider>
  );
}
