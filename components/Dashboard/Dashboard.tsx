import { useState } from "react";
import data from "data.json";
import { TimeCard } from "../TimeCard";
import { Container, MainContainer, Wrapper } from "./style";
import { TimeFrames } from "shared/types";
import { ProfileCard } from "components/ProfileCard";

export const Dashboard = () => {
  const [timeFrames, setTimeFrames] = useState<TimeFrames>("weekly");
  return (
    <Container>
      <MainContainer>
        <ProfileCard timeFrames={timeFrames} onClick={setTimeFrames} />
        <Wrapper>
          {data.map((card) => (
            <TimeCard
              key={card.title}
              title={card.title}
              current={card.timeframes[timeFrames].current}
              previous={card.timeframes[timeFrames].previous}
            />
          ))}
        </Wrapper>
      </MainContainer>
    </Container>
  );
};
