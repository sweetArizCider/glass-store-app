import { ThemeProvider } from "flowbite-react";
import GlassStore from "src/app/pages/GlassStore";
import { customTheme } from "src/theme";
import { ThemeInit } from "../../.flowbite-react/init";

export default function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <ThemeInit />
      <GlassStore />
    </ThemeProvider>
  );
}
