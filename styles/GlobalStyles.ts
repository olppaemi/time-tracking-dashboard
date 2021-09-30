import reset from "styled-reset";
import { createGlobalStyle, ThemeProps } from "styled-components";
import media from "styled-media-query";
import { rem } from "./utils";

export const GlobalStyles = createGlobalStyle`
  ${reset}
  
  *, 
  *::before, 
  *::after {
    box-sizing: border-box;
  }

  body {
    font-family: ${({ theme }) => theme.fonts};
    font-size: ${rem(18)};
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.veryDarkBlue};
  }

  h1 {
    font-size: ${rem(32)};
    font-weight: 300;

    ${media.greaterThan("large")`
      font-size: ${rem(56)};
    `}
    
  }
  h2 {
    font-size: ${rem(24)};
    font-weight: 300;

    ${media.greaterThan("large")`
      font-size: ${rem(40)};
    `}    
  }
`;
