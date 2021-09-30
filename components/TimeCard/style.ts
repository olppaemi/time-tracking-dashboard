import styled, { DefaultTheme } from "styled-components";
import { rem } from "../../styles/utils";

type CardProps = {
  title: string;
};

const handleBackground = (title: string) => {
  switch (title) {
    case "Work":
      return "./images/icon-work.svg";
    case "Play":
      return "./images/icon-play.svg";
    case "Study":
      return "./images/icon-study.svg";
    case "Exercise":
      return "./images/icon-exercise.svg";
    case "Social":
      return "./images/icon-social.svg";
    case "Self Care":
      return "./images/icon-self-care.svg";
    default:
      return "";
  }
};

const handleBackgroundColor = (title: string, theme: DefaultTheme): string => {
  switch (title) {
    case "Work":
      return theme.colors.lightRed;
    case "Play":
      return theme.colors.softBlue;
    case "Study":
      return theme.colors.lightRed2;
    case "Exercise":
      return theme.colors.limeGreen;
    case "Social":
      return theme.colors.violet;
    case "Self Care":
      return theme.colors.softOrange;
    default:
      return "";
  }
};

export const Card = styled.div<CardProps>`
  width: ${rem(327)};
  height: ${rem(160)};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border-radius: ${({ theme }) => theme.borderRadius}
    ${({ theme }) => theme.borderRadius} 50% 50%;
  background: top -10% right 10% / ${rem(78)} no-repeat url(${({ title }) => handleBackground(title)});
  background-color: ${({ title, theme }) =>
    handleBackgroundColor(title, theme)};
`;

export const CardContent = styled.div`
  width: 100%;
  height: ${rem(122)};
  background-color: ${({ theme }) => theme.colors.darkBlue};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: ${rem(28)} ${rem(24)};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.p`
  font-weight: 500;
`;
export const Time = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Current = styled.h1``;
export const Previous = styled.p`
  font-size: ${rem(15)};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.paleBlue};
`;
