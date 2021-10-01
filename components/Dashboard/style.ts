import styled from "styled-components";
import { media } from "styles/media";
import { rem } from "styles/utils";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${media.greaterThan("lg")`
    flex-direction: row;
    height: ${rem(518)};
  `}
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${rem(24)};

  ${media.greaterThan("lg")`
    grid-template-columns: 1fr 1fr 1fr;
    gap: ${rem(30)};
    height: ${rem(518)};
  `}
`;
