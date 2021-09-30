import "styled-components";
import { theme } from "./theme";

declare module "styled-components" {
  export interface DefaultTheme {
    fonts: string;
    colors: {
      white: string;
      blue: string;
      lightRed: string;
      lightRed2: string;
      softBlue: string;
      limeGreen: string;
      violet: string;
      softOrange: string;
      veryDarkBlue: string;
      darkBlue: string;
      desaturatedBlue: string;
      paleBlue: string;
    };
    borderRadius: string;
  }
}
