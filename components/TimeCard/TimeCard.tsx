import {
  Card,
  CardContent,
  Title,
  Time,
  Wrapper,
  Current,
  Previous,
} from "./style";
import Image from "next/image";
import iconEllipsis from "../../public/images/icon-ellipsis.svg";

type TimeCardProps = {
  title: string;
  current: number;
  previous: number;
};

export const TimeCard = ({ title, current, previous }: TimeCardProps) => {
  return (
    <Card title={title}>
      <CardContent>
        <Wrapper>
          <Title>{title}</Title>
          <Image src={iconEllipsis} alt="icon ellipsis" />
        </Wrapper>

        <Time>
          <Current>{current}hrs</Current>
          <Previous>Last Week - {previous}hrs</Previous>
        </Time>
      </CardContent>
    </Card>
  );
};
