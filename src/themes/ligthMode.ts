import { createTheme } from "@nextui-org/react";

import { colorLigthMode } from "./colors";
import fontGoogle from "./fonts";

export const lightTheme = createTheme({
  type: "ligth",
  theme: {
    colors: colorLigthMode,
    fonts: fontGoogle.style,
  },
});
