import { createTheme } from "@nextui-org/react";
import { colorDarkMode } from "./colors";
import fontGoogle from "./fonts";

export const darkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: colorDarkMode,
    fonts: fontGoogle.style
  }
});

