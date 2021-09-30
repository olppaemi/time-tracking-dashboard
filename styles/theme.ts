import { DefaultTheme } from "styled-components";
import { rem } from "./utils";

export const theme: DefaultTheme = {
  fonts: "'Rubik', sans-serif",
  colors: {
    white: "hsl(0, 0%, 100%)",
    blue: "hsl(246, 80%, 60%)",
    lightRed: "hsl(15, 100%, 70%)",
    lightRed2: "hsl(348, 100%, 68%)",
    softBlue: "hsl(195, 74%, 62%)",
    limeGreen: "hsl(145, 58%, 55%)",
    violet: "hsl(264, 64%, 52%)",
    softOrange: "hsl(43, 84%, 65%)",
    veryDarkBlue: "hsl(226, 43%, 10%)",
    darkBlue: "hsl(235, 46%, 20%)",
    desaturatedBlue: "hsl(235, 45%, 61%)",
    paleBlue: "hsl(236, 100%, 87%)",
  },
  borderRadius: `${rem(15)}`,
};
