import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import data from "../data.json";
import { TimeCard } from "../components/TimeCard";
import { Center } from "../components/Center";

type TimeFrames = "daily" | "weekly" | "monthly";

const Home: NextPage = () => {
  const [timeFrames, setTimeFrames] = useState<TimeFrames>("weekly");
  return (
    <>
      <Head>
        <title>Frontend Mentor | Time tracking dashboard</title>
      </Head>
      <main>
        <Center>
          {data.map((card) => (
            <TimeCard
              key={card.title}
              title={card.title}
              current={card.timeframes[timeFrames].current}
              previous={card.timeframes[timeFrames].previous}
            />
          ))}
        </Center>
      </main>
    </>
  );
};

export default Home;
