import styled from "styled-components";
import { media } from "styles/media";

export const Center = styled.div`
  max-width: 375px;
  margin: auto;

  ${media.greaterThan("lg")`
    max-width: 1110px;
  `}
`;
