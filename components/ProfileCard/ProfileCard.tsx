import Image from "next/image";
import { TimeFrames } from "shared/types";
import { Card, Figure, Profile, Name, SelectTimeFrames, Button } from "./style";

type ProfileCardProps = {
  timeFrames: TimeFrames;
  onClick: (timeframe: TimeFrames) => void;
};

export const ProfileCard = ({ timeFrames, onClick }: ProfileCardProps) => {
  return (
    <Card>
      <Profile>
        <Figure>
          <Image
            src="/images/image-jeremy.png"
            alt="jeremy image"
            loading="lazy"
            layout="responsive"
            objectFit="cover"
            objectPosition="center"
            width={64}
            height={64}
          />
        </Figure>
        <Name>
          <p>Report for</p>
          <h2>Jeremy Robson</h2>
        </Name>
      </Profile>
      <SelectTimeFrames>
        <Button
          active={timeFrames === "daily"}
          onClick={() => onClick("daily")}
        >
          Daily
        </Button>
        <Button
          active={timeFrames === "weekly"}
          onClick={() => onClick("weekly")}
        >
          Weekly
        </Button>
        <Button
          active={timeFrames === "monthly"}
          onClick={() => onClick("monthly")}
        >
          Monthly
        </Button>
      </SelectTimeFrames>
    </Card>
  );
};
