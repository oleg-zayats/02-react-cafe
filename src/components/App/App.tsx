import { useState } from "react";

import s from "./App.module.css";

import CafeInfo from "../CafeInfo/CafeInfo";
import VoteOptions from "../VoteOptions/VoteOptions";
import VoteStats from "../VoteStats/VoteStats";
import Notification from "../Notification/Notification";

import type { Votes, VoteType } from "../../types/votes";

const votes: Votes = {
  good: 0,
  neutral: 0,
  bad: 0,
};

export default function App() {
  const [vote, setVote] = useState<Votes>(votes);

  const totalVotes = vote.good + vote.neutral + vote.bad;
  const positiveRate = totalVotes
    ? Math.round((vote.good / totalVotes) * 100)
    : 0;

  function handleVote(type: VoteType) {
    setVote((prevVote) => ({
      ...prevVote,
      [type]: prevVote[type] + 1,
    }));
  }

  function resetVotes() {
    setVote(votes);
  }

  return (
    <>
      <div className={s.app}>
        {<CafeInfo />}
        <VoteOptions
          onVote={handleVote}
          onReset={resetVotes}
          canReset={totalVotes > 0}
        />
        {totalVotes > 0 ? (
          <VoteStats
            votes={vote}
            totalVotes={totalVotes}
            positiveRate={positiveRate}
          />
        ) : (
          <Notification />
        )}
      </div>
    </>
  );
}
