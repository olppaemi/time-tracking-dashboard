import styled from "styled-components";
import { media } from "styles/media";
import { rem } from "styles/utils";

export const Card = styled.div`
  width: ${rem(327)};
  height: ${rem(203)};
  background-color: ${({ theme }) => theme.colors.darkBlue};
  border-radius: ${({ theme }) => theme.borderRadius};
  margin-bottom: ${rem(24)};

  ${media.greaterThan("lg")`
    width: ${rem(255)};
    height: 100%;
    margin-bottom: 0;
    margin-right: ${rem(30)};
  `}
`;
export const Profile = styled.div`
  width: 100%;
  height: ${rem(133)};
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.blue};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: ${rem(34)} ${rem(32)};

  ${media.greaterThan("lg")`
    height: ${rem(354)};
    flex-direction: column;
    align-items: flex-start;
    padding: ${rem(36)} ${rem(32)};
  `}
`;
export const Name = styled.div`
  margin-left: ${rem(20)};
  p {
    font-size: ${rem(15)};
    color: ${({ theme }) => theme.colors.paleBlue};
  }
  & > * {
    margin-top: ${rem(4)};
  }

  ${media.greaterThan("lg")`
    margin-left: 0;
  `}
`;

export const Figure = styled.figure`
  width: ${rem(64)};
  ${media.greaterThan("lg")`
    width: ${rem(78)};
    margin-bottom: ${rem(43)};
  `}
`;

export const SelectTimeFrames = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${rem(24)} ${rem(32)};

  ${media.greaterThan("lg")`
    flex-direction: column;
    align-items: flex-start;
    
    & > button:not(:first-child) {
      margin-top: ${rem(21)};
    }
  `}
`;

type ButtonProps = {
  active: boolean;
};

export const Button = styled.button<ButtonProps>`
  font-family: inherit;
  font-size: inherit;
  background: transparent;
  border: none;
  outline: none;
  color: ${({ theme, active }) =>
    active ? theme.colors.white : theme.colors.desaturatedBlue};

  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
`;
